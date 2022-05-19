import { UserService } from '../services/UserService.js';
import { ShowHandler } from "../handlers/ShowHandler.js";
import { FormHandler } from '../handlers/FormHandler.js';
import { AuthHandler } from '../handlers/AuthHandler.js';

import { DashboardHandler } from '../handlers/DashBoardHandler.js';

const verify = await AuthHandler.userVerify();

ShowHandler.headerMain(verify);
