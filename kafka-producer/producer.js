import { Kafka, logLevel } from "kafkajs";
import { randomUUID } from "node:crypto";
import * as dotenv from "dotenv";

import requiredEnv from "./utils/requiredEnv.js";

dotenv.config();

async function bootstrap() {
  const envs = {
    KAFKA_PROVIDER: requiredEnv("KAFKA_PROVIDER"),
    KAFKA_BROKER: requiredEnv("KAFKA_BROKER"),
    KAFKA_MECHANISM: requiredEnv("KAFKA_MECHANISM"),
    KAFKA_USERNAME: requiredEnv("KAFKA_USERNAME"),
    KAFKA_PASSWORD: requiredEnv("KAFKA_PASSWORD"),
  };

  const kafka = new Kafka({
    clientId: "kafka-producer",
    brokers: [envs.KAFKA_BROKER],
    sasl: {
      mechanism: envs.KAFKA_MECHANISM,
      username: envs.KAFKA_USERNAME,
      password: envs.KAFKA_PASSWORD,
    },
    ssl: envs.KAFKA_PROVIDER === "local" ? false : true,
    logLevel: envs.KAFKA_PROVIDER === "local" ? logLevel.ERROR : logLevel.INFO,
  });

  const producer = kafka.producer();

  try {
    console.log("⚙️ Connecting to Kafka...");

    await producer.connect();

    console.log("✅ Connection successful!");
    console.log("⚡️ Producing messages...");

    await producer.send({
      topic: "notifications.send-notification",
      messages: [
        {
          value: JSON.stringify({
            content: "Nova solicitação de amizade",
            category: "social",
            recipientId: randomUUID(),
          }),
        },
      ],
    });

    console.log("✅ Message sent!");
    console.log("⚙️ Disconnecting from Kafka...");

    await producer.disconnect();

    console.log("✅ Disconnected! Script done!");
  } catch (error) {
    console.error("❌ Something went wrong: ", JSON.stringify(error));
    throw error;
  }
}

bootstrap();
