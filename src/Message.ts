import { nanoid } from "nanoid";

/*
 |--------------------------------------------------------------------------------
 | Types
 |--------------------------------------------------------------------------------
 */

//#region

type MessagePromise = {
  resolve: (value?: void | PromiseLike<void> | undefined) => void;
  reject: (reason?: string) => void;
};

//#endregion

/*
 |--------------------------------------------------------------------------------
 | Message
 |--------------------------------------------------------------------------------
 */

//#region

export class Message {
  public readonly uuid: string;
  public readonly type: string;
  public readonly data: Record<string, unknown>;

  public readonly resolve: MessagePromise["resolve"];
  public readonly reject: MessagePromise["reject"];

  constructor(type: string, data: Record<string, unknown> | undefined, promise: MessagePromise) {
    this.uuid = nanoid(6);
    this.type = type;
    this.data = data ?? {};
    this.resolve = promise.resolve;
    this.reject = promise.reject;
  }

  public print() {
    return JSON.stringify(
      {
        uuid: this.uuid,
        type: this.type,
        data: this.data
      },
      null,
      2
    );
  }

  public toString() {
    return JSON.stringify({
      uuid: this.uuid,
      type: this.type,
      data: this.data
    });
  }
}

//#endregion
