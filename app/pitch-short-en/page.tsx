"use client";

import pitchDataShortEn from "@/pitch.data.short.en";
import { PitchShortExperience } from "@/components/pitch/PitchShortExperience";

export default function PitchShortEnPage() {
  return <PitchShortExperience data={pitchDataShortEn} locale="en" />;
}
