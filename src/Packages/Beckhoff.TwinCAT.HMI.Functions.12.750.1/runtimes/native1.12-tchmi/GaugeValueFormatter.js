var TcHmi;!function(TcHmi){let Functions;!function(Functions){let Beckhoff;!function(Beckhoff){Beckhoff.GaugeValueFormatter=function(value,maxDecimals=1/0){return null==value?"":(isFinite(maxDecimals)||(maxDecimals=3),value.toFixed(maxDecimals))}}(Beckhoff=Functions.Beckhoff||(Functions.Beckhoff={}))}(Functions=TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("GaugeValueFormatter","TcHmi.Functions.Beckhoff",TcHmi.Functions.Beckhoff.GaugeValueFormatter);