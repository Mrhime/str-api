import { Injectable } from '@nestjs/common';

@Injectable()
export class StrService {
  polendromCheck(str: string): string {
    const incommingStr = str.toLowerCase().replace(/[\W_]/g, '');
    const reversteStr = incommingStr.split('').reverse().join('');
    if (incommingStr === reversteStr) {
      return 'палиндром';
    }
    return 'не палиндром';
  }

  previosSymbol(str: string): object {
    const arrSymbols = str.split('');
    const arrSymbolsCount = [];
    arrSymbols.forEach((symbol) => {
      if (arrSymbolsCount.indexOf(symbol) === -1) {
        arrSymbolsCount[symbol] = str.split(symbol).length - 1;
      }
    });
    console.log(arrSymbolsCount);
    const max = {
      key: '',
      value: 0,
    };

    const res = {
      count: 0,
      symbol: '',
    };
    for (const key in arrSymbolsCount) {
      const value = arrSymbolsCount[key];
      if (value > max.value) {
        if (res.count < max.value) {
          res.count = max.value;
          res.symbol = max.key;
        }
        max.value = value;
        max.key = key;
      }
    }
    return res;
  }
}
