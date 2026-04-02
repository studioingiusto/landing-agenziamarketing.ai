"use client";

import pitchDataShort from "@/pitch.data.short";
import { PitchShortExperience } from "@/components/pitch/PitchShortExperience";

export default function PitchShortPage() {
  return <PitchShortExperience data={pitchDataShort} locale="it" />;
}
