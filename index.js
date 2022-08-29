import "dotenv/config";
import Mux from "@mux/mux-node";

console.log("env", {
  1: process.env.MUX_TOKEN_ID,
  2: process.env.MUX_TOKEN_SECRET,
});

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID,
  process.env.MUX_TOKEN_SECRET
);

const asset = await Video.Assets.create({
  input: "https://muxed.s3.amazonaws.com/leds.mp4",
  playback_policy: "public",
  test: true,
});

console.log("res", { asset, id: asset.id });
