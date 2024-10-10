import { NextRequest, NextResponse } from "next/server";
import apiResponseCode from "../../constants/apiResponseCode";
import { ZodTypeAny } from "zod";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export function successResponse({
    message,
    data = null,
    status = 200,
    code = apiResponseCode.OK,
}) {
    return NextResponse.json({ status: true, code, message, data }, { status });
}

export function failureResponse({ error, detail, status = 400 }) {
    return NextResponse.json({ error, detail, status: false }, { status });
}

export async function withValidation(request, method, schema, handler) {
    if (request.method !== method) {
        return failureResponse({ error: 'Invalid Method', status: 405 })
    }

    const data = await request.json()
    const validation = schema.safeParse(data);

    if (!validation.success) {
        return failureResponse({
            error: 'Invalid Request', detail: validation.error.formErrors.fieldErrors
        })
    }

    return handler(data)
}


// type ValidationRule = 'email' | 'required' | 'string';
export async function validateRequest(request, rules) {
    const requestData = await request.json();
    const errors = Object.entries(rules).map(([field, validation]) => isInvalid(validation, field, requestData[field]));
    throw Error(JSON.stringify(errors))
}
function isInvalid(validationRule, key, value) {
    return validationRule.find((rule) => {
        const validation = isValidated[rule](key, value)
        if (!validation.isValid) {
            return validation.error;
        }
    })
}

const isValidated = {
    string: (key, value) => ({ isValid: typeof value == 'string', error: `${key} must be a string` }),
    required: (key, value) => ({ isValid: !!value, error: `${key} is required` }),
    email: (key, value) => ({ isValid: !!value.match(/.*@.*\.\w/)?.[0], error: `${key} must be an email` }),
    file: (key, value) => ({ isValid: true })
}

