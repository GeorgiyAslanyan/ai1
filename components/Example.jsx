import React from "react";
import CodeSnippet from "./Code";

const code1 = `import { BybitCredentials, BybitInterval } from '../types';
import { RestClientV5, WebsocketClient } from 'bybit-api';
import { OrderManagerV2 } from './OrderManagerV2';
import { StrategyV3 } from './StrategyV3';
import { PositionManager } from './PositionManager';

import * as credentials from '../../config.env.json';
import { WebhookClient } from 'discord.js';
import { CandleSniffer } from './CandleSnifferV2';
import { Logger } from 'pino';
import { logTail } from '../utils/logger';
import { FetchError } from '../errors/FetchError';
import { OrderManagerPivot } from './OrderManagerPivot';

export class ProfitHound {
  private client: RestClientV5;
  private ws: WebsocketClient;
  private logger: Logger;

  private candleSniffer: CandleSniffer;
  private orderManager: OrderManagerPivot;
  private positionManager: PositionManager;
  private strategy: StrategyV3;
  private symbol: string;
  private interval: BybitInterval;
  private discordWebHook: WebhookClient;
  private setupComplete: boolean;

  constructor(_symbol: string, _interval: BybitInterval) {
    this.setupComplete = false;
    this.symbol = _symbol;
  }
}`;

const code2 = `# Add the BolLiinger Bands 
df.ta.bbands (length=20, append=True) 
df.ta.ad (length=14, append=True)

df = df.rename(
     {
        "BBL_20_2.0": "bb_lower",
        "BBM_20_2.0": "bb middle",
        "BBU_20_2.0": "bb_upper",
        "BBM_20_2.0": "bb middle",
        "BBB_20_2.0": "bb_bandwidth",
        "BBP_20_2.0" : "bb_percent",
        "ADX_14": "adx",
        "DMP_14": "dmp"
        "DMN_14": "dmn",
     },
     axis=1,
)

df ＝ df.drop(columns=["dmp", "dmn"])`;

const code3 = `import { BybitCandle } from '../types'
import { writeJsonToFile } from '/utils/writeToFile' 
import { StopLoss, Trade, TradeResult, TradeType } from ./backtest 
import { IsonProvider } from '/json.provider' 
import { PingPongStratagey } from ./strategy'

type BackTestConfig = {
  entryBandPercentage: number 
  stopLoss: StopLoss[]
  startingBalance: number
  contractQty: number
}

export class BackTest {
  private dataProvider: JsonProvider 
  private strategy: PingPongStratagey | undefined
  private trades: Trade[] = []
  private tradeResults: TradeResult[] = []
  private tradeId = 0

  private config: BackTestConfig

  constructor (config: BackTestConfig) {
    this.dataProvider = new JsonProvider)
    this.config = config
  }

  private randomizeTradeEntry( 
    entryPrice: number,
    bandPercentage: number
  ): number {`;

const Example = () => {
  return (
      <div className="grid grid-cols-3 max-w-[1290px] gap-10 py-10 z-10">
      <CodeSnippet code={code1} />
      <CodeSnippet code={code2} />
      <CodeSnippet code={code3} />
    </div>
    
  );
};

export default Example;
