// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSentry } from "@sentry/nextjs";

const handler = async (req, res) => {
  throw new Error("New error from Vladan");
  res.status(200).json({ name: "John Doe" });
};

export default withSentry(handler);
