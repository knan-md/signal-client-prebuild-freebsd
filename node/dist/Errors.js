"use strict";
//
// Copyright 2021 Signal Messenger, LLC.
// SPDX-License-Identifier: AGPL-3.0-only
//
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["Generic"] = 0] = "Generic";
    ErrorCode[ErrorCode["DuplicatedMessage"] = 1] = "DuplicatedMessage";
    ErrorCode[ErrorCode["SealedSenderSelfSend"] = 2] = "SealedSenderSelfSend";
    ErrorCode[ErrorCode["UntrustedIdentity"] = 3] = "UntrustedIdentity";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
class SignalClientErrorBase extends Error {
    constructor(message, name, operation, extraProps) {
        super(message);
        // Include the dynamic check for `name in ErrorCode` in case there's a bug in the Rust code.
        if (name !== undefined && name in ErrorCode) {
            this.name = name;
            this.code = ErrorCode[name];
        }
        else {
            this.name = 'SignalClientError';
            this.code = ErrorCode.Generic;
        }
        this.operation = operation;
        if (extraProps !== undefined) {
            Object.assign(this, extraProps);
        }
        // Maintains proper stack trace, where our error was thrown (only available on V8)
        //   via https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this);
        }
    }
}
exports.SignalClientErrorBase = SignalClientErrorBase;
//# sourceMappingURL=Errors.js.map