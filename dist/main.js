"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const whitelist = ['http://localhost:3001', 'https://holumbo.com', 'http://localhost:3000', 'https://studio.apollographql.com'];
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: function (origin, callback) {
            if (!origin || whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            }
            else {
                console.log(origin);
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true
    });
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map