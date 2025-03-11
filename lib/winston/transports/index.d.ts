// Type definitions for winston 3.0
// Project: https://github.com/winstonjs/winston

/// <reference types="node" />


import * as Transport from 'winston-transport';

declare namespace winston {
  interface ConsoleTransportOptions extends Transport.TransportStreamOptions {
    consoleWarnLevels?: string[];
    stderrLevels?: string[];
    debugStdout?: boolean;
    eol?: string;
    forceConsole?: boolean;
  }

  interface ConsoleTransportInstance extends Transport {
    name: string;
    stderrLevels: string[];
    eol: string;

    new (options?: ConsoleTransportOptions): ConsoleTransportInstance;
  }

  interface StreamTransportOptions extends Transport.TransportStreamOptions {
    stream: NodeJS.WritableStream;
    eol?: string;
  }

  interface StreamTransportInstance extends Transport {
    eol: string;

    new (options?: StreamTransportOptions): StreamTransportInstance;
  }

  interface Transports {
    ConsoleTransportOptions: ConsoleTransportOptions;
    Console: ConsoleTransportInstance;
    StreamTransportOptions: StreamTransportOptions;
    Stream: StreamTransportInstance;
  }
}

declare const winston: winston.Transports;
export = winston;
