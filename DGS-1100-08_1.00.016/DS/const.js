var g_SwitchInfo=['DGS-1100-08','1.00.016','1.0.7'];
var g_PortNum=8;
var g_MinDHCPRetryTimes=5;
var g_MaxDHCPRetryTimes=120;
var g_MinTmOut=60;
var g_MaxTmOut=36000;
var g_MaxFrame=9216;
var g_TrunkNum=2;
var g_TrunkFstID=9;
var g_MinTkPtNum=2;
var g_MaxTkPtNum=4;
var g_bIgmpPro_Support = 0;
var g_PriMap=[2,0,4,6];
var g_queMap=[1,0,0,1,2,2,3,3];
var g_MaxVlanNum=32;
var g_MinVID=1;
var g_MaxVID=4094;
var g_MaxOUINum=13;
var g_MaxCustOUINum=5;
var g_DftOUITable = [
['3COM','00-E0-BB-XX-XX-XX'],
['Cisco','00-03-6B-XX-XX-XX'],
['Veritel','00-E0-75-XX-XX-XX'],
['Pingtel','00-D0-1E-XX-XX-XX'],
['Siemens','00-01-E3-XX-XX-XX'],
['NEC/Philips','00-60-B9-XX-XX-XX'],
['Huawei3COM','00-0F-E2-XX-XX-XX'],
['Avaya','00-09-6E-XX-XX-XX']];
var g_MaxCustSOUINum=5;
var g_DefaultOUINum=3;
var g_MaxSMACNum=32;
var g_MaxMulSMACNum=32;
var g_MaxPerPage=80;
var g_MinLBDInte=1;
var g_MaxLBDInte=32767;
var g_MinLBDReco=60;
var g_MaxLBDReco=1000000;
var g_MinSTRate=8;
var g_MaxSTRate=1000000;
var g_MaxLearningAdd=4160;
var g_MaxStaIGSNum=32;
var g_MaxIGSNum=128;
var g_bPoE_Support=0;
var g_bAdaptive_Access=1;
