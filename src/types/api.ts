export interface EthProcessingResult {
  reqAddress: number[];
  reqId: string;
  reqData: string;
  OrgAddress: number[];
  OrgId: string;
  OrgData: string;
}

export interface ZokratesResult {
  message: string;
  compileOutput: string;
  setupOutput: string;
  computeWitnessOutput: string;
  generateProofOutput: string;
  verificationResult: string;
  verifyOutput: string;
}

export interface ApiResponse {
  sessionId: string;
  message: string;
  zokratesVerification: string;
}

export interface SessionData {
  data: string;
  // Add any other fields that your getData API returns
}