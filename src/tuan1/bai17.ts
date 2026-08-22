class Logger {
    private static instance: Logger;
  
    private constructor() {}
  
    public static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
  
      return Logger.instance;
    }
  
    public log(message: string): void {
      console.log(`[LOG]: ${message}`);
    }
  }
  
  const logger1 = Logger.getInstance();
  const logger2 = Logger.getInstance();
  
  logger1.log("Hello World!");
  logger2.log("This is a test.");
  
  console.log(logger1 === logger2);