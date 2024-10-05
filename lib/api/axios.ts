import axios from "axios";
import { env } from "process";

axios.defaults.baseURL = env.BASE_URL;