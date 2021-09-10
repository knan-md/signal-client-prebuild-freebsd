export declare enum ErrorCode {
    Generic = 0,
    DuplicatedMessage = 1,
    SealedSenderSelfSend = 2,
    UntrustedIdentity = 3
}
export declare class SignalClientErrorBase extends Error {
    readonly code: ErrorCode;
    readonly operation: string;
    constructor(message: string, name: keyof typeof ErrorCode | undefined, operation: string, extraProps?: Record<string, unknown>);
}
export declare type GenericError = SignalClientErrorBase & {
    code: ErrorCode.Generic;
};
export declare type DuplicatedMessageError = SignalClientErrorBase & {
    code: ErrorCode.DuplicatedMessage;
};
export declare type SealedSenderSelfSendError = SignalClientErrorBase & {
    code: ErrorCode.SealedSenderSelfSend;
};
export declare type UntrustedIdentityError = SignalClientErrorBase & {
    code: ErrorCode.UntrustedIdentity;
    addr: string;
};
export declare type SignalClientError = GenericError | DuplicatedMessageError | SealedSenderSelfSendError | UntrustedIdentityError;
