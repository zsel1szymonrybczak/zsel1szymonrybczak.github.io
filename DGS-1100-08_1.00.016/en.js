var	g_Sp1="&nbsp;",
g_Sp2=g_Sp1+g_Sp1,
g_Sp3=g_Sp1+g_Sp2,
g_Sp6=g_Sp3+g_Sp3;
var	g_Lbkt="(",
g_Rbkt=")",
g_WavL="-";
var	BT0101="Add VID",
BT0102="Add VLAN",
BT0103="All",
BT0104="Apply",
BT0105="Backup",
BT0106="Cancel",
BT0107="Clean All",
BT0108="Back",
BT0109="Continue",
BT0110="Delete",
BT0111="Delete All",
BT0114="Find",
BT0115="Next Page",
BT0116="OK",
BT0117="Pre Page",
BT0118="Previous Page",
BT0119="PVID settings",
BT0120="Reboot",
BT0121="Refresh",
BT0123="Rename",
BT0124="Restore",
BT0126="Upgrade",
BT0127="Yes",
BT0128="Select All",
BT0129="Clear Counter",
BT0130="Add",
BT0131="Select None";
var	Pub0100="VID",
Pub0101="ID",
Pub0102="Port",
Pub0103="Enabled",
Pub0104="Disabled",
Pub0105="Error",
Pub0106="Rx",
Pub0107="Tx",
Pub0108="From Port",
Pub0109="To Port",
Pub0110="N/A",
Pub0111="Both",
Pub0112="All",
Pub0113="<font color='red'><b>Note:</b></font>"+g_Sp3,
Pub0114="State",
Pub0115="Priority",
Pub0116="Normal",
Pub0117="Auto",
Pub0118="W",
Pub0119="milliwatts",
Pub0120="Low",
Pub0121="Medium",
Pub0122="High",
Pub0123="Highest",
Pub0124="Critical",
Pub0125="VLAN ID",
Pub0126="VLAN Name",
Pub0127="MAC Address",
Pub0130=" sec",
Pub0134="Static",
Pub0135="Dynamic",
Pub0136="IP Address",
Pub0137="Ports",
PubM000="The browser connection will be disconnected.\n\n",
PubM001="Please use the new IP address to reconnect to the device.";
var	PArr001=[Pub0120,Pub0121,Pub0122,Pub0123],
PArr002=[Pub0104,Pub0103],
PArr003=[g_Sp3+Pub0106,g_Sp3+Pub0107,g_Sp1+Pub0111];
var	Tree0100="System",
Tree0110="System Information Settings",
Tree01102="IPv4 Interface",
Tree0120="Port Configuration",
Tree0130="PoE",
Tree0200="Management",
Tree0220="SNMP",
Tree0221="SNMP Global Settings",
Tree0222="SNMP Community Table Settings",
Tree0223="SNMP Host Settings",
Tree0240="D-Link Discovery Protocol",
Tree0300="L2 Features",
Tree0310="FDB",
Tree0311="Static FDB",
Tree03111="Unicast Static FDB",
Tree03112="Multicast Static FDB",
Tree0312="MAC Address Table Settings",
Tree0313="MAC Address Table",
Tree0320="VLAN",
Tree0323="Management VLAN",
Tree0324="Asymmetric VLAN",
Tree0330="Spanning Tree",
Tree0331="STP Global Settings",
Tree0332="STP Port Settings",
Tree0350="Link Aggregation",
Tree0360="L2 Multicast Control",
Tree0361="IGMP Snooping",
Tree03612="IGMP Snooping Groups Settings",
Tree0400="QoS",
Tree0411="802.1p Default Priority",
Tree04111="802.1p/DSCP Default Priority",
Tree0413="Port Rate Limiting",
Tree0500="Security",
Tree0530="Port Security",
Tree0600="OAM",
Tree0700="Monitoring",
Tree0710="Statistics",
Tree0800="Green",
Tree0820="EEE",
Tree0900="Message",
HTML0100=ISD+"H_00_DeviceInfo.htm",
HTML0101=ISD+'H_01_Reset.htm',
HTML0102=ISD+'H_02_Configuration.htm',
HTML0103=ISD+'H_03_Firmware.htm',
HTML0104=ISD+'H_04_Reboot.htm',
HTML0105=ISD+'H_05_Save.htm',
HTML0109=ISD+'H_09_ShowMsg.htm',
HTML0111=ISD+'H_11_Sys.htm',
HTML0112=ISD+'H_12_IPv4.htm',
HTML0113=ISD+'H_13_Port_Setting.htm',
HTML0114=ISD+'H_14_EEE.htm',
HTML0115=ISD+'H_15_PWD.htm',
HTML0116=ISD+'H_16_DDP.htm',
HTML0117=ISD+'H_17_SNMP_Global.htm',
HTML0118=ISD+'H_18_SNMP_Community.htm',
HTML0119=ISD+'H_19_SNMP_Host.htm',
HTML0120=ISD+'H_20_Jumbo_Frame.htm',
HTML0121=ISD+'H_21_1Q_VLAN.htm',
HTML01211=ISD+'H_21_1Q_VLAN_Set.htm',
HTML0122=ISD+'H_22_Trunking.htm',
HTML0123=ISD+'H_23_IGMP.htm',
HTML0124=ISD+'H_24_Traffic_Segm.htm',
HTML0125=ISD+'H_25_Mirroring.htm',
HTML0127=ISD+'H_27_IGS_Group.htm',
HTML0131=ISD+'H_31_802_1p_DSCP.htm',
HTML0135=ISD+'H_35_STP.htm',
HTML0136=ISD+'H_36_STP_Port.htm',
HTML0142=ISD+'H_42_Storm_Control.htm',
HTML0143=ISD+'H_43_PortSec.htm',
HTML0144=ISD+'H_44_StaMult_MAC.htm',
HTML0145=ISD+'H_45_Static_MAC.htm',
HTML0146=ISD+'H_46_Dynamic_FDB.htm',
HTML0147=ISD+'H_47_FDB_Set.htm',
HTML0148=ISD+'H_48_Bandwidth_Ctrl.htm',
HTML0151=ISD+'H_51_Statistics.htm',
HTML0152=ISD+'H_52_CableDiag.htm',
HTML0155=ISD+'H_55_Voice_VLAN.htm',
HTML0156=ISD+'H_56_Surveil_VLAN.htm',
HTML0160=ISD+'H_60_PoE_Sys.htm',
HTML0161=ISD+'H_61_PoE_Port.htm',
HTML0181=ISD+'H_81_PowerSave.htm',
HTML0190=ISD+'H_90_LBD.htm',
HTML0191=ISD+'H_91_PB_VLAN.htm',
HTML01911=ISD+'H_91_PB_VLAN_Set.htm',
HTML0192=ISD+'H_92_1Q_Mgt_VLAN.htm',
HTML0193=ISD+'H_93_Asy_VLAN.htm';
var	Login0100="Connect to ",
Login0101="Enter your password",
Login0102="Password",
Login0104="Login",
Login0105="Login timeout.",
Login0106="Wrong password.";
var	Logout0100="Logout",
Logout0101="Are you sure you want to logout of Web Configuration page? If yes,\n\nclick the \"Yes\" button and you will be returned to the login page.",
Logout0102="The current browser connection will",
Logout0103="be disconnected if you click here.";
var	Tip0100="Logged in as: admin",
Tip0101='"'+Pub0109+'" cannot be smaller than "'+Pub0108+'".',
Tip0102="Please input an integer.",
Tip0103="The value range is ",
Tip0104="Please input a Number.";
var	Menu0100="Save",
Menu0101="Tools",
Menu0103="Help",
Menu01031="D-Link Support Site",
Menu01032="User Guide",
URL_SUPPORT="http://tsd.dlink.com.tw/",
URL_USGUARD="http://www.dlink.com.tw/online_manual/Switch/DGS-1100-0508%20ver%20B1/";
var	Save0100="Save Configuration",
Save0101='Please press the "Apply" button to save system settings to flash.';
var	Reset0100="Reset",
MReset0100='The Switch will be reset to its factory defaults including IP address, and then will save, reboot.',
MReset0101='The Switch will be reset to its factory defaults except IP address, and then will save, reboot.',
MReset0102='The Switch will be reset to its factory defaults including IP address.',
MReboot105="Are you sure want to reset?";
var	Reboot0100="Reboot System",
Reboot0101="Do you want to save the settings ?",
Reboot0102='If you do not save the settings, all changes made in this session will be lost.',
Reboot0105="Yes",
Reboot0106="No",
MReboot100="Are you sure want to reboot?";
var	Upgrade0100="Firmware Upgrade",
Upgrade0108="Firmware Backup & Upgrade",
Upgrade0109="Backup Firmware to file :",
Upgrade0110="Upgrade firmware from file :",
Upgrade0111="Firmware Upgrade Progressing, please wait...",
Upgrade0112="Do not leave the page or Firmware Upgrade will be terminated",
Upgrade0113="Firmware Upgrade Processing, please wait...\n\nFile Transfering",
Upgrade0114="Firmware Upgrade Fail",
Upgrade0115="Upgrade",
MUpgrade0100="Are you sure you want to upgrade the firmware?";
var	Backup0100="Configuration Backup & Restore",
Backup0101="Backup current settings to file :",
Backup0102="Restore saved settings from file :",
Backup0103="Include Password",
Backup0104="Exclude Password",
MBackup100="Please select a bin file.",
MBackup101="The switch will save configuration automatically before backup.\n\nDo you wish to continue?",
MBackup102=PubM000+PubM001;
var	Device0100="Device Information",
Device0101="Device Type",
Device0102="System Up Time",
Device0103="System Name",
Device0104=" Gigabit Ethernet Switch",
Device0105="System Location",
Device0107="Boot PROM Version",
Device0108="Mask",
Device0109="Firmware Version",
Device0110="Gateway",
Device0112="System Contact",
Device0113="Hardware Version",
Device0114="Web Session Timeout",
Device0115="Serial Number",
Device0117="Settings",
Device0126=" days ",
Device0127=" hours ",
Device0128=" mins ",
Device0129=" secs",
Device0130="Ver ";
var	System0100="System Settings",
System0101="IP Settings",
System0103="Mask",
System0104="Gateway",
System0105="System Information",
System0110="DHCP default retry interval: 5 seconds",
System0111="DHCP Retry Time",
System0112="times",
MSystem100="Invalid IP Address.",
MSystem101="Invalid Subnet Mask.",
MSystem102="Invalid Gateway.",
MSystem104="IP subnet must equal to gateway subnet.",
MSystem105="Gateway must not be equal to IP.",
MSystem107="Invalid System Name.",
MSystem108="Invalid System Location.",
MSystem109=PubM000+PubM001,
VSystem100="Static",
VSystem101="DHCP";
var	Port0100="Port Settings",
Port0103="Speed",
Port0104="Flow Control",
Port0105="Description",
Port0106="Capability Advertised",
Port0201="Link Status",
Port0202="Speed",
VPort101="Disable",
VPort102="100M Full",
VPort103="100M Half",
VPort104="10M Full",
VPort105="10M Half",
VPort108="1000M Full",
VPort110="10_half",
VPort111="10_full",
VPort112="100_half",
VPort113="100_full",
VPort114="1000_full",
VPort200="Down",
VPort201="Error Disabled",
VPort202="Up",
MPort100="Sorry, you cannot disable all ports.",
MPort101="The speed is set to force mode.\n\n\* The speed mode must be the same as the link partner.",
MPort102="QoS works best when Flow Control is disabled.\n\nWhen Flow Control is enabled, QoS may not perform accurate bandwidth allocation.\n\nDo you still want to enable Flow Control?",
MPort103="LA port",
MPort104="LA port can not support in different speed.",
MPort105="can not support in half-duplex mode.",
MPort106="LA port can not support in different flow control.",
MPort107="Please select a advertised capability.",
PortSpeed=[Pub0117,VPort105,VPort104,VPort103,VPort102,VPort108,VPort108],
LinkState=[VPort200,VPort201,VPort202];
var	Password0100="Password Access Control",
Password0102="Old Password",
Password0103="New Password",
Password0104="Confirm Password",
Password0200="Change Password",
Password0201="Wrong old password",
MPassword101="Password can not be empty!",
MPassword102="Please Confirm the Password!";
var Eee0100="802.3az EEE settings",
Eee0101="802.3az EEE";
var Jumbo0100="Jumbo Frame",
Jumbo0102="Maximum frame length is ",
Jumbo0103=" bytes if enabled.";
var	Trunking0100="Link Aggregation",
Trunking0101="Link Aggregation Global Settings",
Trunking0102="Trunking Groups",
Trunking0103="Members",
Trunking0106="Link Aggregation list",
Trunking0111="Channel Group Information",
Trunking0112="Maximum number of ports in a Link Aggregation group is ",
Comm2LA=" to an aggregated link.",
CommCantWithDiff="Cannot add ports with different ",
CommCantInDiff="Cannot add ports in different ",
MTrunking103=CommCantWithDiff+"Speed configurations"+Comm2LA,
MTrunking105=CommCantWithDiff+"VLAN configurations"+Comm2LA,
MTrunking109="Link Aggregation members have to be in a VLAN.",
MTrunking110=CommCantWithDiff+"rate control configurations"+Comm2LA,
MTrunking111="Cannot add a port in half-duplex mode"+Comm2LA,
MTrunking112="Cannot add a LBD-enabled port"+Comm2LA,
MTrunking113="Cannot add a port-security enabled port"+Comm2LA,
MTrunking114=CommCantWithDiff+"FDB-destination-hit configurations"+Comm2LA,
MTrunking115="The minimum port numbers for an aggregated link is 2.",
MTrunking118=CommCantWithDiff+"PVID configurations"+Comm2LA,
MTrunking119=CommCantWithDiff+"802.1p default priorities"+Comm2LA,
MTrunking121="Cannot add the port as it is a member port of another aggregated link.",
MTrunking122="Cannot add Mirror Target port"+Comm2LA,
MTrunking123=CommCantWithDiff+"Mirror Sniffer Mode"+Comm2LA,
MTrunking124=CommCantWithDiff+"flow control configurations"+Comm2LA,
MTrunking125="Cannot add ports with Disabled-Auto-learning configurations"+Comm2LA,
MTrunking126=CommCantWithDiff+"Trafic Segmentation configurations"+Comm2LA,
MTrunking127=CommCantWithDiff+"IGMP Router Port status"+Comm2LA,
MTrunking128=CommCantInDiff+"Static IGMP Groups"+Comm2LA,
MTrunking129=CommCantInDiff+"Static Multicast MAC Groups"+Comm2LA,
MTrunking130=CommCantInDiff+"Trafic Segmentation Forwarding Domains"+Comm2LA,
MTrunking131=CommCantInDiff+"STP configurations"+Comm2LA;
var	IGMP0100="IGMP Snooping Settings",
IGMP0101="IGMP Snooping",
IGMP0102="IGMP Static Router Port List",
MIGMP100="Internet Group Management Protocol snooping allows the switch to recognize IGMP queries and reports sent between network stations or devices and an IGMP host."
+" When enabled for IGMP snooping, the switch can add or remove a port to a specific device based on IGMP messages passing through the switch.";
var	IGSP0100="IGMP Settings",
IGSP0101="IGMP",
IGSP0102="IGMP Snooping",
IGSP0103="IGMP Proxy",
IGSP0104="Query State",
IGSP0105="Query Interval",
IGSP0106="Response Interval",
IGSP0107="Fast Leave",
IGSP0110="IGMP Router Port",
IGSP0111="Router Port",
IGSP0115="IGMP Group List";
var	IGSSG0100="IGMP Snooping Static Groups Settings",
IGSSG0101="Group Address",
MUTENTR0100="IGMP Snooping Groups Table",
MUTENTR0101="Group ID",
MUTENTR0102="Group Address",
MUTENTR0103="Multicast MAC address",
MUTENTR0104="Member Port",
MMUTENTR0100="All Multicast entries will be deleted, continue?",
MMUTENTR0101="Must select whole ports of the aggregated link to IGMP Snooping Static Group's member port.",
MMUTENTR0102=" is not the VLAN's member port";
var TRAFIC0100="Traffic Segmentation",
TRAFIC0101="Traffic Segmentation Settings",
TRAFIC0102="Protected Port",
TRAFIC0105="From Forward Port",
TRAFIC0106="To Forward Port",
TRAFIC0108="Forwarding Domain",
MTRAFIC0100="Traffic Segmentation can not support in Port-Based VLAN mode.",
MTRAFIC0101="Cannot set different forwarding domain for aggregated link ports.",
MTRAFIC0102="Must select whole ports of the aggregated link to ports' forwarding domain.",
MTRAFIC0110="When the forwarding domain of a port is empty, layer 2 forwarding for packets received by that port is not restricted.";
var	Mirroring0100="Mirroring Settings",
Mirroring0102="Destination",
Mirroring0103="Frame Type",
Mirroring0104="Source",
MMirroring100="Must at least select one source port.",
MMirroring101="Target Port and Source Port cannot be in the same Trunk.",
MMirroring102="Target port is trunking port!",
MMirroring103="Must select whole ports of the aggregated link with the same Sniffer Mode to source port.";
var	LBD0100="Loopback Detection Settings",
LBD0102="Loopback Detection",
LBD0103="Time Interval",
LBD0104="Recover Time",
LBD0105="Loopback Detection Global Settings",
LBD0106="Loopback Detection Port Settings",
LBD0109="Loopback Detection State",
LBD0110="Result",
LBD0111="or",
LBD0112="Loop",
MLBD100="Can not enable Loopback Detection when Spanning Tree is enabled.";
MLBD103="LA port",
MLBD104="can not support in LBD-enabled mode.";
var LBDA100=[Pub0116,LBD0112];
var	Statistics0100="Port Counters",
Statistics0120="TxOK",
Statistics0121="RxOK",
Statistics0122="TxErr",
Statistics0123="RxErr";
var	AutoCVlan0100="Surveillance VLAN Settings",
AutoCVlan0103="Surveillance VLAN",
AutoCVlan0104="Surveillance VLAN Global Settings",
AutoCVlan0105="Surveillance VLAN Summary",
AutoCVlan0111="Component Type",
AutoCVlan0112="Description",
AutoCVlan0114="Surveillance VLAN can not support in Port-Based VLAN mode.",
AutoCVlan0115="User-defined MAC Settings",
AutoCVlan0116="To add more device(s) for Surveillance VLAN by user-defined configuration as below",
AutoCVlan0117="Maximum number of user-defined MAC is ",
AutoCVlan0119="Delete",
AutoCVlan0120="Video Management Server",
AutoCVlan0121="VMS Client",
AutoCVlan0122="Video Encoder",
AutoCVlan0123="Network Storage",
AutoCVlan0124="Other IP Surveillance Devices",
AutoCVlan0125="Invalid Description.",
AutoCVlan0126="Please enter MAC address value.",
AutoCVlan0127="Invalid MAC address.",
AutoCVlan0128=" entries.",
AutoCVlan0129="Maximum User-defined MAC is ",
AutoCVlan0130=".",
AutoCVlan0131="This MAC is included in the default MAC!",
AutoCVlan0132="This MAC is already exist!",
AutoCVlan0133="(XX-XX-XX-XX-XX-XX)",
AutoCVlan0140="D-Link Surveillance Device",
AutoCVlan0141="D-Link IP Surveillance Device",
AutoCVlan0142="The VLAN ID already is Voice VLAN ID!",
AutoCVlan0143="This MAC is included in the Voice VLAN OUI table!",
AutoCVlanA001=[AutoCVlan0120,AutoCVlan0121,AutoCVlan0122,AutoCVlan0123,AutoCVlan0124];
var	AutoVVlan0100="Voice VLAN Settings",
AutoVVlan0103="Voice VLAN",
AutoVVlan0104="Voice VLAN Global Settings",
AutoVVlan0105="Voice VLAN Summary",
AutoVVlan0111="Component Type",
AutoVVlan0112="Description",
AutoVVlan0113="Telephony OUI",
AutoVVlan0114="Voice VLAN can not support in Port-Based VLAN mode.",
AutoVVlan0115="OUI Settings",
AutoVVlan0116="To add more device(s) for Voice VLAN by user-defined configuration as below",
AutoVVlan0117="Maximum number of user-defined OUI is ",
AutoVVlan0119="Delete",
AutoVVlan0125="Invalid Description.",
AutoVVlan0126="Please enter OUI address value.",
AutoVVlan0129="Maximum User-defined OUI is ",
AutoVVlan0130=".",
AutoVVlan0132="This OUI is already exist!",
AutoVVlan0133="(XX-XX-XX-XX-XX-XX)",
AutoVVlan0134="The VLAN ID already is Surveillance VLAN ID!",
AutoVVlan0135=" entries.",
AutoVVlan0136="Default OUI",
AutoVVlan0137="User defined OUI",
AutoVVlan0138="-XX-XX-XX",
AutoVVlan0139="The OUI is already exist in the Surveillance VLAN OUI table!";
var	CableDiag0100="Cable Diagnostics",
CableDiag0102="Test Now",
CableDiag0103="Test Result",
CableDiag0104="Cable Fault Distance (meters)",
CableDiag0105="Cable Length (meters) [in range]",
CableDiag0106="Pair",
CableDiag0111="Please wait...",
CableDiag0112="OK",
CableDiag0113="Open in Cable",
CableDiag0114="Short in Cable",
CableDiag0115="Mismatch in Cable",
CableDiag0118="No Cable",
CableDiag0119="Test port is disabled",
CableDiag0120="The cable diagnostics feature is designed primarily for administrators or customer service representatives to verify and test copper cables; it can rapidly determine the quality of the cables and the types of error.",
CableDiag0122="1. If cable length is displayed as \"N/A\" it means the cable length is \"Not Available\". ",
CableDiag0123="This is due to the port being unable to obtain cable length, or the cables used are broken and/or bad in quality.",
CableDiag0124="1. The deviation of \"Cable Fault Distance\" is +/-2 meters, therefore No cable may be displayed under Test Result, when the cable used is less than 2 m in length.",
CableDiag0125="2. It also measures cable fault and identifies the fault in length according to the distance from this switch.";
var	Vlan1Q0100="802.1Q VLAN",
Vlan1Q0101="IEEE 802.1Q VLAN",
Vlan1Q0102="Maximum Entries :",
Vlan1Q0103="PVID",
Vlan1Q0106="(Name should be less than 10 characters)",
Vlan1Q0109="Untagged",
Vlan1Q0110="Tagged",
Vlan1Q0111="Not Member",
Vlan1Q0112="Untagged VLAN Ports",
Vlan1Q0113="Tagged VLAN Ports",
Vlan1Q0114="VLAN Rename",
Vlan1Q0115="Delete VID",
Vlan1Q0300="VID Configuration",
Vlan1Q0301="Tag",
Vlan1Q0302="Untag",
MVlan1Q100="Can't add 802.1Q VID when Port-Based VLAN is enabled.",
MVlan1Q102="Invalid PVID.",
MVlan1Q103="802.1Q VLAN is disabled.",
MVlan1Q104="Number of VLAN group is over limit.",
MVlan1Q105="Invalid VLAN Name.",
MVlan1Q106="Please enter VID value",
MVlan1Q107="VID must be between",
MVlan1Q108="and",
MVlan1Q1080=".",
MVlan1Q109="VID is duplicated.",
MVlan1Q110="Untagged Port can only be in one VLAN.",
MVlan1Q111="You should let all Trunk members in the same PVID.",
MVlan1Q112="Members in a VLAN have to be in the same trunk.",
MVlan1Q113="The VID is one of the PVID, so it cannot be deleted.",
MVlan1Q200="The VID cannot be deleted. You have to include at least one member in the VLAN.",
MVlan1Q201="You cannot delete this VLAN in trunk.",
MVlan1Q202="You cannot remove the ports in trunk.",
MVlan1Q301="You have to include at least one member in the VLAN.",
MVlan1Q302="The current connection port is removed from the Management VLAN, This browser connection will be disconnected.\n\nAre you sure this setting?";
var	MgtVLAN0100="IEEE 802.1Q Management VLAN",
MgtVLAN0101="Management VLAN",
MgtVLAN0110="When 802.1Q Management VLAN is enabled, the 802.1Q VLAN should be enabled first.",
MMgtVLAN0101="Management VLAN can only be enabled when 802.1Q VLAN is enabled.",
MMgtVLAN0102="Management VLAN can not be empty.";
var CommIgsMacRst=" IGMP Snooping and MAC Address Table will be reset to default.";
var	MAsyVLAN0101="Asymmetric VLAN can only be enabled when 802.1Q VLAN is enabled.",
MAsyVLAN0102="The settings of 802.1Q VLAN, Management VLAN,"+CommIgsMacRst;
var	PB0100="Port-Based VLAN Settings",
PB0101="Port-Based VLAN",
PB0102="Maximum Entries :",
PB0104="(Name should be less than 10 characters)",
PB0105="Member",
PB0106="VLAN Index",
PB0108="VLAN member port",
PB0109="VLAN Rename",
PB0110="Delete VLAN",
PB0200="Port Based VLAN",
MPB100="The 802.1Q VLAN and the Traffic Segmentation will be disabled and their settings will be reset to default.\nThe Surveillance VLAN, the Voice VLAN, the Management VLAN will be disabled.\nThe settings of"+CommIgsMacRst,
MPB101="The Port-Based VLAN will be disabled and the 802.1Q VLAN will be enabled.\nThe settings of"+CommIgsMacRst,
MPB102="Port-Based VLAN is disabled.",
MPB103="Number of VLAN group is over limit.",
MPB104="Invalid VLAN Name.",
MPB105="Please enter VLAN name.",
MPB106="Members in a VLAN have to be in the same trunk.",
MPB107="You have to include at least one member in the VLAN.",
MPB301="You cannot delete this VLAN in trunk.",
MPB400="Invalid VLAN Name length.";
var	Priority0000="IEEE 802.1p/DSCP Default Priority Settings",
Priority0100="IEEE 802.1p Default Priority Settings",
Priority0101="Queuing mechanism",
Priority0102="Select QoS Mode",
Priority0103="Global Settings",
Priority0104='By default the 802.1p is chosen.',
Priority0105='To enable DSCP mode, please select the DSCP mode and press "Apply" to go to DSCP Priority Settings page.',
Priority0106="For ingress untagged packets, the per port \"Default Priority\" settings will be applied to packets of each port to provide port-based traffic prioritization.",
Priority0107="For ingress tagged packets, D-Link EasySmart Switches will refer to their 802.1p information and prioritize them with 4 different priority queues.",
Priority0200="DSCP Priority Settings",
Priority0201="From DSCP value",
Priority0202="To DSCP value",
Priority0203="DSCP value",
VPriority100="Strict Priority",
VPriority101="WRR (By default is strict priority)",
VPriority102="802.1p",
VPriority103="DSCP",
MPriority100="Trunk member ports must be in the same 802.1p priority.";
var	Storm0100="Storm Control Settings",
Storm0101="Storm Control",
Storm0102="Threshold(pps)",
Storm0103="(When link speed is 10Mbps)",
Storm0104="(When link speed is 100Mbps)",
Storm0105="Storm Control Status",
Storm0110="Threshold",
Storm0111="kbps",
VStorm102="Multicast & Broadcast & Unknown Unicast",
VStorm103="Multicast & Broadcast",
VStorm104="Broadcast Only";
var	Bandwidth0100="Port Rate Limiting",
Bandwidth0103="Direction",
Bandwidth0104="Rate Limit",
Bandwidth0106="Input (Rate)",
Bandwidth0107="Output (Rate)",
Bandwidth0108="Input",
Bandwidth0109="Output",
MBandwidth0105="Cannot set different rate control for aggregated link ports.";
var	VBandwidth120=["No Limit","8kbps","16kbps","32kbps","64kbps","128kbps","256kbps","512kbps","1Mbps","2Mbps","4Mbps",
"8Mbps","16Mbps","32Mbps","64Mbps","128Mbps","256Mbps","512Mbps"],
VBandwidth121=[Bandwidth0108,Bandwidth0109,Pub0111];
var	Static0100="Unicast Static FDB",
Static0101="<b>"+"Disable"+"</b>"+" Auto Learning "+"<b>"+"Excluding"+"</b>"+" Uplink Port",
Static0102="Uplink Port",
Static0103="Unicast Static MAC Address Lists",
Static0104="Maximum Entries :",
Static0107="MAC Address Learning ",
VStatic100="On",
VStatic101="Off",
MStatic100="Please enable at least one port's MAC Address Learning which Max Learning Address is not set to 0.",
MStatic101="Cannot disable an aggregated link port's MAC Address Learning.",
MStatic102="Please enter correct MAC format (ex:00-00-00-00-00-01).",
MStatic103=" is not allowed MAC.",
MStatic104="Could not be device MAC.",
MStatic105="Could not be Broadcast MAC.",
MStatic106="Could not be Multicast MAC.",
MStatic107="Please enter MAC address value.",
MStatic108="Cannot add Unicast Static MAC for an aggregated link port.",
MStatic109="Only support ",
MStatic110=" entries.",
MStatic111="The VLAN ID must equal to 1 when asymmetric VLAN enable.",
MStatic112="The entry is already in the Unicast Static MAC Address List.",
MStatic114="Please keep at least one Unicast Static MAC entry when all ports has been disabled auto learning or their Max Learning Address has been set to 0.",
MStatic118="Could not be Unicast MAC.",
MStatic200="All Unicast Static MAC entries will be deleted, continue?",
MMulSta100="Must select whole ports of the aggregated link for Multicast Static MAC Address entry.",
MMulSta200="All Multicast Static MAC entries will be deleted, continue?";
var	Dynamic0106="Type",
Dynamic0107="Add",
Dynamic0108="Page",
Dynamic0109="All",
VDynamic102="SurveillanceVLAN",
VDynamic103="VoiceVLAN",
MDynamic100="Cannot add a dynamic MAC address to Static MAC address that learnt from an aggregated link.",
MDynamic101="Unicast Static MAC only support ",
MDynamic102="entries.",
MDynamic103="Unicast Static MAC table is full.",
MDynamic104=" MAC address entries already exist, the rest of the available entry for user is ",
MDynamic108="Please choose at least one entry to add to Static MAC table.";
var	PoESys100="PoE System",
PoESys102="PoE Power Threshold",
PoESys103="Power Shut Off Sequence",
PoESys104="Deny next port",
PoESys105="Deny low priority port",
PoESys110="System Power Status",
PoESys111="Total PoE Power Budget",
PoESys112="Power Used",
PoESys113="Power Left",
PoESys114="The percentage of system power supplied",
MPoESys000=" watts guard band is reserved for system to prevent a PD from being powered off when encountering a sudden increment of PD power supply. When Used Power reaches guard band, a new PD will trigger the action defined in Power Shut Off Sequence.",
MPoESys100="1."+g_Sp3+"7"+MPoESys000,
MPoESys101="2."+g_Sp3+"If a sudden increment of a PD power causes PSE power overload, switch will firstly stop power supply to the port with a low priority PD. As a result, high priority PD can work without being affected.",
MPoESys102="1."+g_Sp3+"3"+MPoESys000;
var PoESysA100=[PoESys104,PoESys105];
var	PoEPort100="PoE Configuration",
PoEPort101="Power Limit",
PoEPort102="Max.Wattage",
PoEPort104="Power(W)",
PoEPort105="Voltage(V)",
PoEPort106="Current(mA)",
PoEPort107="Classification",
PoEPort108="Status",
PoEPort109="(User Defined)",
PoEPort110="Class 0",
PoEPort111="Class 1",
PoEPort112="Class 2",
PoEPort113="Class 3",
PoEPort114="Class 4",
PoEPort115="Legacy PD",
PoEPort116="Legacy Support",
PoEPort121="POWER ON",
PoEPort122="POWER OFF",
PoEPort123="Time based OFF",
PoEPort124="Short",
PoEPort125="Overload",
PoEPort126="Power denied",
PoEPort127="Thermal shutdown",
MPoEPort100="Max power used by PSE: Class 0: 15.4W, Class 1: 4.0W, Class 2: 7.0W, Class 3: 15.4W",
MPoEPort101=", Class 4: 30W";
var PoEPortA100=[Pub0120,Pub0122,Pub0124],
PoEPortA101=[Pub0117,PoEPort111,PoEPort112,PoEPort113,PoEPort114],
PoEPortA102=[PoEPort121,PoEPort122,PoEPort123,PoEPort124,PoEPort125,PoEPort126,PoEPort127,PoEPort122,PoEPort122];
var DDP0100="D-Link Discovery Protocol State",
DDP0110="Report Timer",
VDDP0100="Never";
var PortSec0104="Admin State",
PortSec0105="Max Learning Address";
MPortSec0100="Cannot enable Port Security for aggregated link ports.",
MPortSec0101="Cannot set all ports' Max Learning Address to 0 or their Auto Learning has been disabled.";
var SNMP0101="SNMP Global State",
SNMP0102="Trap Settings",
SNMP0103="Trap Global State",
SNMP0104="SNMP Authentication Trap",
SNMP0105="Port Link Up",
SNMP0106="Port Link Down",
SNMP0107="Coldstart",
SNMP0108="Warmstart",
SNMP1101="SNMP Community Settings",
SNMP1102="Access Right",
SNMP1103="Community Name",
SNMP1105="Read-Write",
SNMP1106="Read-Only",
SNMP1107="private",
SNMP1108="public",
SNMP1109="Total Entries: 2",
SNMP2101="SNMP Host Settings",
SNMP2102="Host IPv4 Address",
SNMP2103="User-based Security Model",
SNMP2104="SNMPv1",
SNMP2105="Community String",
SNMP2106="SNMPv2c",
MSNMP1101="Invalid Community Name.",
MSNMP1102="The Community Name already exists.",
MSNMP2101="Invalid Host IP.",
MSNMP2102="Host IP can not be same as switch IP.";
SNMPA101="Read Write",
SNMPA102="Read Only";
var ASNMP0100=[SNMPA101,SNMPA102],
ASNMP0101=[SNMP2104,SNMP2106];
var	AsyVLAN0100="Asymmetric VLAN State";
var MulStaMAC0100="Multicast Static FDB",
MulStaMAC0101="Multicast Static MAC Address Lists";
var	STPG0100="Spanning Tree Global Settings",
STPG0101="Spanning Tree State",
STPG0102="Spanning Tree Mode",
STPG0103="STP Traps",
STPG0104="STP New Root Trap",
STPG0105="STP Topology Change Trap",
STPG0106="Root Bridge Information",
STPG0107="Root Bridge",
STPG0108="Root Cost",
STPG0109="Root Maximum Age",
STPG0110="Root Forward Delay",
STPG0111="Root Port",
STPG0120="STP",
STPG0121="RSTP",
MSTPG100="Can not enable Spanning Tree when Loopback Detection is enabled.";
var	STPPT0100="STP Port Settings",
STPPT0101="Port Fast";
STPPT0110="Network",
STPPT0111="Edge",
STPPT0120="Blocking",
STPPT0121="Learning",
STPPT0122="Forwarding",
STPPT0123="Link down",
MSTPPT100="Should TODO",
ASTPPT100=[STPPT0110,Pub0104,STPPT0111],
ASTPPT101=[STPPT0123,Pub0104,STPPT0120,STPPT0121,STPPT0122];
var MSG_0100="Please wait a second.";
var	g_aMsg=[
[1,0,0,'',"Success"],
[1,0,1,'',"Failed"],
[1,0,0,Save0100,"The configuration has been saved."],
[1,20,0,Backup0100,"Configuration restore success, please login again after device boot up."],
[0,16,0,Upgrade0100,MSG_0100],
[0,20,0,Reboot0100,"Device reboot success. Please login again after device boot up."],
[0,20,0,Reset0100,"System has been reset to factory default. Please login again after device boot up."],
[1,0,1,Password0100,"Invalid Old Password"],
[1,0,1,Save0100,"Save configuration failed."],
[1,0,1,Backup0100,"Configuration restore fail. Please check the config file..."],
[0,0,1,System0100,PubM001],
[0,14,0,Reset0100,MSG_0100],
];
