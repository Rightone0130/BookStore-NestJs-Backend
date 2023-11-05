import { ExecutionContext } from "@nestjs/common";
declare const jwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class jwtAuthGuard extends jwtAuthGuard_base {
    getRequest(context: ExecutionContext): any;
}
export {};
