const config = require('./config.json');
module.exports = function logdrops(d) {
let enabled = config.toggle;
let ptenabled = config.party;
let cchat = 0;
let header = 'Drop -> ';


//Command
	d.command.add(["logdrop", "ld"], (arg_1) => {
	if (!arg_1) {
		enabled = !enabled
		d.command.message(`Log Drop : ${enabled ? 'enabled' : 'disabled'}.`)
		}
	else if (arg_1 === 'pt') {
		ptenabled = !ptenabled
		d.command.message(`Party Message : ${ptenabled ? 'enabled' : 'disabled'}.`)
		}
	else if (arg_1 === 'info') {
		d.command.message(enabled)
		d.command.message(ptenabled)
		}
	else
		{
			d.command.message("Wrong Command!")
		}
	})
	
// Chat Switch
	d.hook('S_SPAWN_DROPITEM', 9, (event) => {
	if(!enabled) return;
	if (!ptenabled)
		{
			cchat = 7;
		}
	else
		{
			cchat = 21;
		}
	// Mark
	
	if(	event.item === 300	||  event.item === 400	||  event.item === 500	||  event.item === 600	)
	{
		sendMessage(header+'(<font color="#ffffff">Item </font>'+'<font color="#ffffff">Drop</font>)', cchat)
		notice('(Item Drop)')
	}

	/*
	// Weapon Gold lvl 69 Twin Swords / Lance / Greatsword / Axe / Disc / Bow / Staff / Scepter / Scythes / Arcannon / Powerfists / Shuriken / Runeglaive
	//1*1
	else if(	event.item === 89509 	)
	{
		sendMessage(header+'(<font color="#ffffff">Twin Swords </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89517 	)
	{
		sendMessage(header+'(<font color="#ffffff">Lance </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89525 	)
	{
		sendMessage(header+'(<font color="#ffffff">Greatsword </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89533 	)
	{
		sendMessage(header+'(<font color="#ffffff">Axe </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89545 	)
	{
		sendMessage(header+'(<font color="#ffffff">Disc </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89549 	)
	{
		sendMessage(header+'(<font color="#ffffff">Bow </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89561 	)
	{
		sendMessage(header+'(<font color="#ffffff">Staff </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89569 	)
	{
		sendMessage(header+'(<font color="#ffffff">Scepter </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89577 	)
	{
		sendMessage(header+'(<font color="#ffffff">Scythes </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89585 	)
	{
		sendMessage(header+'(<font color="#ffffff">Arcannon </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89589 	)
	{
		sendMessage(header+'(<font color="#ffffff">Powerfists </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89601 	)
	{
		sendMessage(header+'(<font color="#ffffff">Shuriken </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89605 	)
	{
		sendMessage(header+'(<font color="#ffffff">Runeglaive </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	
	// Weapon Gold lvl 69 Twin Swords / Lance / Greatsword / Axe / Disc / Bow / Staff / Scepter / Scythes / Arcannon / Powerfists / Shuriken / Runeglaive
	//1*2
	
	else if(	event.item === 89510 	)
	{	 
		sendMessage(header+'(<font color="#00ff00">Twin Swords </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89518 	)
	{	 
		sendMessage(header+'(<font color="#00ff00">Lance </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89526 	)
	{	 
		sendMessage(header+'(<font color="#00ff00">Greatsword </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}	
	else if(	event.item === 89534 	)
	{	 
		sendMessage(header+'(<font color="#00ff00">Axe </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)	
	}	
	else if(	event.item === 89546 	)
	{	 
		sendMessage(header+'(<font color="#00ff00">Disc </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89550 	)
	{	 
		sendMessage(header+'(<font color="#00ff00">Bow </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89562 	)
	{	 
		sendMessage(header+'(<font color="#00ff00">Staff </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}	
	else if(	event.item === 89570 	)
	{	 
		sendMessage(header+'(<font color="#00ff00">Scepter </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)		
	}
	else if(	event.item === 89578 	)
	{
		sendMessage(header+'(<font color="#00ff00">Scythes </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89586 	)
	{
		sendMessage(header+'(<font color="#00ff00">Arcannon </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89590 	)
	{ 
		sendMessage(header+'(<font color="#00ff00">Powerfists </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89602 	)
	{ 
		sendMessage(header+'(<font color="#00ff00">Shuriken </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)		
	}
	else if(	event.item === 89606 	)
	{ 
		sendMessage(header+'(<font color="#00ff00">Runeglaive </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)			
	}
	
	// Weapon Gold lvl 69 Twin Swords / Lance / Greatsword / Axe / Disc / Bow / Staff / Scepter / Scythes / Arcannon / Powerfists / Shuriken / Runeglaive
	//1*3
	
	else if(	event.item === 89511 	)
	{ 
		sendMessage(header+'(<font color="#0391c4">Twin Swords </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89519 	)
	{ 
		sendMessage(header+'(<font color="#0391c4">Lance </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89527 	)
	{ 
		sendMessage(header+'(<font color="#0391c4">Greatsword </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89535 	)
	{ 
		sendMessage(header+'(<font color="#0391c4">Axe </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89547 	)
	{ 
		sendMessage(header+'(<font color="#0391c4">Disc </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89551 	)
	{	 
		sendMessage(header+'(<font color="#0391c4">Bow </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89563 	)
	{	 
		sendMessage(header+'(<font color="#0391c4">Staff </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89571 	)
	{ 
		sendMessage(header+'(<font color="#0391c4">Scepter </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89579 	)
	{ 
		sendMessage(header+'(<font color="#0391c4">Scythes </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89587 	)
	{ 
		sendMessage(header+'(<font color="#0391c4">Arcannon </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89591 	)
	{ 
		sendMessage(header+'(<font color="#0391c4">Powerfists </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89603 	)
	{ 
		sendMessage(header+'(<font color="#0391c4">Shuriken </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89607 	)
	{
		sendMessage(header+'(<font color="#0391c4">Runeglaive </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	
	// Weapon Gold lvl 69 Twin Swords / Lance / Greatsword / Axe / Disc / Bow / Staff / Scepter / Scythes / Arcannon / Powerfists / Shuriken / Runeglaive
	//1*4
	
	else if(	event.item === 89512 	)
	{ 
		sendMessage(header+'(<font color="#fff317">Twin Swords </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89520 	)
	{ 
		sendMessage(header+'(<font color="#fff317">Lance </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89528 	)
	{ 
		sendMessage(header+'(<font color="#fff317">Greatsword </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89536 	)
	{
		sendMessage(header+'(<font color="#fff317">Axe </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89548 	)
	{ 
		sendMessage(header+'(<font color="#fff317">Disc </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89552 	)
	{
		sendMessage(header+'(<font color="#fff317">Bow </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89564 	)
	{
		sendMessage(header+'(<font color="#fff317">Staff </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89572 	)
	{
		sendMessage(header+'(<font color="#fff317">Scepter </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89580 	)
	{
		sendMessage(header+'(<font color="#fff317">Scythes </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89588 	)
	{ 
		sendMessage(header+'(<font color="#fff317">Arcannon </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89592 	)
	{ 
		sendMessage(header+'(<font color="#fff317">Powerfists </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89604 	)
	{ 
		sendMessage(header+'(<font color="#fff317">Shuriken </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89608 	)
	{
		sendMessage(header+'(<font color="#fff317">Runeglaive </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	
	// Weapon Gold lvl 69 Twin Swords / Lance / Greatsword / Axe / Disc / Bow / Staff / Scepter / Scythes / Arcannon / Powerfists / Shuriken / Runeglaive
	//1*5
	
	else if(	event.item === 89513 || event.item === 89514 || event.item === 89515 || event.item === 89516 
		 || 	event.item === 89521 || event.item === 89522 || event.item === 89523 || event.item === 89524
		 || 	event.item === 89529 || event.item === 89530 || event.item === 89531 || event.item === 89532
		 || 	event.item === 89537 || event.item === 89538 || event.item === 89539 || event.item === 89540
		 || 	event.item === 89541 || event.item === 89542 || event.item === 89543 || event.item === 89544
		 || 	event.item === 89553 || event.item === 89554 || event.item === 89555 || event.item === 89556
		 || 	event.item === 89557 || event.item === 89558 || event.item === 89559 || event.item === 89560
		 || 	event.item === 89565 || event.item === 89566 || event.item === 89567 || event.item === 89568
		 || 	event.item === 89573 || event.item === 89574 || event.item === 89575 || event.item === 89576
		 || 	event.item === 89581 || event.item === 89582 || event.item === 89583 || event.item === 89584
		 || 	event.item === 89593 || event.item === 89594 || event.item === 89595 || event.item === 89596
		 || 	event.item === 89597 || event.item === 89598 || event.item === 89599 || event.item === 89600
		 || 	event.item === 89609 || event.item === 89610 || event.item === 89611 || event.item === 89612	)
	{
		sendMessage(header+'<font color="#b5aaaa">(Trash Item Delete It)</font>', cchat)
	}
	
	// Armor Gold lvl 69 Hauberk / Cuirass / Robe
	//1*1
	
	else if (	event.item === 89613	)
	{
		sendMessage(header+'(<font color="#ffffff">Annihilation Hauberk </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 89617	)
	{
		sendMessage(header+'(<font color="#ffffff">Dark Light Hauberk </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 89621	)
	{
		sendMessage(header+'(<font color="#ffffff">Annihilation Cuirass </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 89625	)
	{
		sendMessage(header+'(<font color="#ffffff">Dark Light Cuirass </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 89633	)
	{
		sendMessage(header+'(<font color="#ffffff">Dark Light Robe </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	
	// Armor Gold lvl 69 Hauberk / Cuirass / Robe
	//1*2
	
	else if(	event.item === 89614	)
	{	 
		sendMessage(header+'(<font color="#00ff00">Annihilation Hauberk </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89618	)
	{	 
		sendMessage(header+'(<font color="#00ff00">Dark Light Hauberk </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89622	)
	{	 
		sendMessage(header+'(<font color="#00ff00">Annihilation Cuirass </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89626	)
	{	 
		sendMessage(header+'(<font color="#00ff00">Dark Light Cuirass </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89634	)
	{	 
		sendMessage(header+'(<font color="#00ff00">Dark Light Robe </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	
	// Armor Gold lvl 69 Hauberk / Cuirass / Robe
	//1*3
	
	else if(	event.item === 89615	)
	{	 
		sendMessage(header+'(<font color="#0391c4">Annihilation Hauberk </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89619	)
	{	 
		sendMessage(header+'(<font color="#0391c4">Dark Light Hauberk </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89623	)
	{ 
		sendMessage(header+'(<font color="#0391c4">Annihilation Cuirass </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89627	)
	{ 
		sendMessage(header+'(<font color="#0391c4">Dark Light Cuirass </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89635	)
	{ 
		sendMessage(header+'(<font color="#0391c4">Dark Light Robe </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}

	// Armor Gold lvl 69 Hauberk / Cuirass / Robe
	//1*4
	
	else if(	event.item === 89616 	)
	{ 
		sendMessage(header+'(<font color="#fff317">Annihilation Hauberk </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89620 	)
	{	 
		sendMessage(header+'(<font color="#fff317">Dark Light Hauberk </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89624 	)
	{ 
		sendMessage(header+'(<font color="#fff317">Annihilation Cuirass </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)	
	}
	else if(	event.item === 89628 	)
	{ 
		sendMessage(header+'(<font color="#fff317">Dark Light Cuirass </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)	
	}
	else if(	event.item === 89636 	)
	{
		sendMessage(header+'(<font color="#fff317">Dark Light Robe </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	
	// Armor Gold lvl 69 Hauberk / Cuirass / Robe
	//1*5
	
	else if(	event.item === 89629 || event.item === 89630 || event.item === 89631 || event.item === 89632 	)
	{
		sendMessage(header+'<font color="#b5aaaa">(Trash Item Delete It)</font>', cchat)
	}
	
	// Armor Gold lvl 69 Gauntlet / Gloves / Sleeves
	//1*1
	
	else if (	event.item === 89637	)
	{
		sendMessage(header+'(<font color="#ffffff">Annihilation Gauntlet </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 89641	)
	{
		sendMessage(header+'(<font color="#ffffff">Dark Light Gauntlet </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 89645	)
	{
		sendMessage(header+'(<font color="#ffffff">Annihilation Gloves </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 89649	)
	{
		sendMessage(header+'(<font color="#ffffff">Dark Light Gloves </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 89657	)
	{
		sendMessage(header+'(<font color="#ffffff">Dark Light Sleeves </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	
	// Armor Gold lvl 69 Gauntlet / Gloves / Sleeves
	//1*2
	
	else if(	event.item === 89638	)
	{
		sendMessage(header+'(<font color="#00ff00">Annihilation Gauntlet </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89642	)
	{
		sendMessage(header+'(<font color="#00ff00">Dark Light Gauntlet </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89646	)
	{
		sendMessage(header+'(<font color="#00ff00">Annihilation Gloves </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89650	)
	{
		sendMessage(header+'(<font color="#00ff00">Dark Light Gloves </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89658	)
	{
		sendMessage(header+'(<font color="#00ff00">Dark Light Sleeves </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	
	// Armor Gold lvl 69 Gauntlet / Gloves / Sleeves
	//1*3
	
	else if(	event.item === 89639	)
	{
		sendMessage(header+'(<font color="#0391c4">Annihilation Gauntlet </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89643	)
	{
		sendMessage(header+'(<font color="#0391c4">Dark Light Gauntlet </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89647	)
	{
		sendMessage(header+'(<font color="#0391c4">Annihilation Gloves </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89651	)
	{
		sendMessage(header+'(<font color="#0391c4">Dark Light Gloves </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89659	)
	{
		sendMessage(header+'(<font color="#0391c4">Dark Light Sleeves </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	
	// Armor Gold lvl 69 Gauntlet / Gloves / Sleeves
	//1*4
	
	else if(	event.item === 89640	)
	{
		sendMessage(header+'(<font color="#fff317">Annihilation Gauntlet </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89644	)
	{
		sendMessage(header+'(<font color="#fff317">Dark Light Gauntlet </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89648	)
	{
		sendMessage(header+'(<font color="#fff317">Annihilation Gloves </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89652	)
	{
		sendMessage(header+'(<font color="#fff317">Dark Light Gloves </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89660	)
	{
		sendMessage(header+'(<font color="#fff317">Dark Light Sleeves </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	
	// Armor Gold lvl 69 Gauntlet / Gloves / Sleeves
	//1*5
	
	else if(	event.item === 89653 || event.item === 89654 || event.item === 89655 || event.item === 89656	)
	{
		sendMessage(header+'<font color="#b5aaaa">(Trash Item Delete It)</font>', cchat)
	}
	
	// Armor Gold lvl 69 Greaves / Boots / Shoes
	//1*1
	
	else if (	event.item === 89661	)
	{
		sendMessage(header+'(<font color="#ffffff">Annihilation Greaves </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 89665	)
	{
		sendMessage(header+'(<font color="#ffffff">Dark Light Greaves </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 89669	)
	{
		sendMessage(header+'(<font color="#ffffff">Annihilation Boots </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 89673	)
	{
		sendMessage(header+'(<font color="#ffffff">Dark Light Boots </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 89681	)
	{
		sendMessage(header+'(<font color="#ffffff">Dark Light Shoes </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	
	// Armor Gold lvl 69 Greaves / Boots / Shoes
	//1*2
	
	else if(	event.item === 89662	)
	{
		sendMessage(header+'(<font color="#00ff00">Annihilation Greaves </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89666	)
	{
		sendMessage(header+'(<font color="#00ff00">Dark Light Greaves </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89670	)
	{
		sendMessage(header+'(<font color="#00ff00">Annihilation Boots </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89674	)
	{
		sendMessage(header+'(<font color="#00ff00">Dark Light Boots </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 89682	)
	{
		sendMessage(header+'(<font color="#00ff00">Dark Light Shoes </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	
	// Armor Gold lvl 69 Greaves / Boots / Shoes
	//1*3

	else if(	event.item === 89663	)
	{
		sendMessage(header+'(<font color="#0391c4">Annihilation Greaves </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89667	)
	{
		sendMessage(header+'(<font color="#0391c4">Dark Light Greaves </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89671	)
	{
		sendMessage(header+'(<font color="#0391c4">Annihilation Boots </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89675	)
	{
		sendMessage(header+'(<font color="#0391c4">Dark Light Boots </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 89683	)
	{
		sendMessage(header+'(<font color="#0391c4">Dark Light Shoes </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	
	// Armor Gold lvl 69 Greaves / Boots / Shoes
	//1*4

	else if(	event.item === 89664	)
	{
		sendMessage(header+'(<font color="#fff317">Annihilation Greaves </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89668	)
	{
		sendMessage(header+'(<font color="#fff317">Dark Light Greaves </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89672	)
	{
		sendMessage(header+'(<font color="#fff317">Annihilation Boots </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89676	)
	{
		sendMessage(header+'(<font color="#fff317">Dark Light Boots </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 89684	)
	{
		sendMessage(header+'(<font color="#fff317">Dark Light Shoes </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	
	// Armor Gold lvl 69 Greaves / Boots / Shoes
	//1*5
	
	else if(	event.item === 89677 || event.item === 89678 || event.item === 89679 || event.item === 89680	)
	{
		sendMessage(header+'<font color="#b5aaaa">(Trash Item Delete It)</font>', cchat)
	}
	// Brooch / Mask / Belt
	//1*1
	
	else if (	event.item === 88875	)
	{
		sendMessage(header+'(<font color="#ffffff">Annihilation Brooch </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 88879	)
	{
		sendMessage(header+'(<font color="#ffffff">Dark Light Brooch </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 209384	)
	{
		sendMessage(header+'(<font color="#ffffff">Kaia Fury Brooch </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 209388	)
	{
		sendMessage(header+'(<font color="#ffffff">Kaia Wisdom Brooch </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 209376	)
	{
		sendMessage(header+'(<font color="#ffffff">Kaia Fury Mask </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 209380	)
	{
		sendMessage(header+'(<font color="#ffffff">Kaia Wisdom Mask </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 209392	)
	{
		sendMessage(header+'(<font color="#ffffff">Kaia Fury Belt </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 209396	)
	{
		sendMessage(header+'(<font color="#ffffff">Kaia Wisdom Belt </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	
	//1*2
	
	else if(	event.item === 88876	)
	{
		sendMessage(header+'(<font color="#00ff00">Annihilation Brooch </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 88880	)
	{
		sendMessage(header+'(<font color="#00ff00">Dark Light Brooch </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 209385	)
	{
		sendMessage(header+'(<font color="#00ff00">Kaia Fury Brooch </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 209389	)
	{
		sendMessage(header+'(<font color="#00ff00">Kaia Wisdom Brooch </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 209377	)
	{
		sendMessage(header+'(<font color="#00ff00">Kaia Fury Mask </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 209381	)
	{
		sendMessage(header+'(<font color="#00ff00">Kaia Wisdom Mask </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 209393	)
	{
		sendMessage(header+'(<font color="#00ff00">Kaia Fury Belt </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 209397	)
	{
		sendMessage(header+'(<font color="#00ff00">Kaia Wisdom Belt </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	
	//1*3
	
	else if(	event.item === 88877	)
	{
		sendMessage(header+'(<font color="#0391c4">Annihilation Brooch </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 88881	)
	{
		sendMessage(header+'(<font color="#0391c4">Dark Light Brooch </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 209386	)
	{
		sendMessage(header+'(<font color="#0391c4">Kaia Fury Brooch </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 209390	)
	{
		sendMessage(header+'(<font color="#0391c4">Kaia Wisdom Brooch </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 209378	)
	{
		sendMessage(header+'(<font color="#0391c4">Kaia Fury Mask </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 209382	)
	{
		sendMessage(header+'(<font color="#0391c4">Kaia Wisdom Mask </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 209394	)
	{
		sendMessage(header+'(<font color="#0391c4">Kaia Fury Belt </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	else if(	event.item === 209398	)
	{
		sendMessage(header+'(<font color="#0391c4">Kaia Wisdom Belt </font>'+'<font color="#ff0000">2</font>'+'<font color="#0391c4"> Effect</font>)', cchat)
	}
	
	//1*4
	
	else if(	event.item === 88878	)
	{
		sendMessage(header+'(<font color="#fff317">Annihilation Brooch </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 88882	)
	{
		sendMessage(header+'(<font color="#fff317">Dark Light Brooch </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 209387	)
	{
		sendMessage(header+'(<font color="#fff317">Kaia Fury Brooch </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 209391	)
	{
		sendMessage(header+'(<font color="#fff317">Kaia Wisdom Brooch </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 209379	)
	{
		sendMessage(header+'(<font color="#fff317">Kaia Fury Mask </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 209383	)
	{
		sendMessage(header+'(<font color="#fff317">Kaia Wisdom Mask </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 209395	)
	{
		sendMessage(header+'(<font color="#fff317">Kaia Fury Belt </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 209399	)
	{
		sendMessage(header+'(<font color="#fff317">Kaia Wisdom Belt </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	*/
	
	/*
	// Box Brooch
	else if(	event.item === 209118	)
	{
		sendMessage(header+'(<font color="#fff317">Brooch Box</font>)', cchat)
		notice('(Brooch Box)')
	}
	// Box Mask
	else if(	event.item === 209126	)
	{
		sendMessage(header+'(<font color="#fff317">Mask Box</font>)', cchat)
		notice('(Mask Box)')
	}
	// Box Belt
	else if(	event.item === 209125	)
	{
		sendMessage(header+'(<font color="#fff317">Belt Box</font>)', cchat)
		notice('(Belt Box)')
	}
	*/
	
	// Box Zenobia
	else if(	event.item === 206960	)
	{
		sendMessage(header+'(<font color="#c63db6">Zenobia Box</font>)', cchat)
		notice('(Zenobia Box)')
	}
	
	// Mahtnan Weapon Crate (Mythical)
	else if(	event.item === 4926	)
	{
		sendMessage(header+'(<font color="#c63db6">Mahtnan Weapon Crate (Mythical)</font>)', cchat)
		notice('(Mahtnan Weapon Crate (Mythical))')
	}
	// Mahtnan Armor Crate (Mythical)
	else if(	event.item === 4929	)
	{
		sendMessage(header+'(<font color="#c63db6">Mahtnan Armor Crate (Mythical)</font>)', cchat)
		notice('(Mahtnan Armor Crate (Mythical))')
	}
	// Mahtnan Hand Armor Crate (Mythical)
	else if(	event.item === 4932	)
	{
		sendMessage(header+'(<font color="#c63db6">Mahtnan Hand Armor Crate (Mythical)</font>)', cchat)
		notice('(Mahtnan Hand Armor Crate (Mythical))')
	}
	// Mahtnan Footwear Crate (Mythical)
	else if(	event.item === 4935	)
	{
		sendMessage(header+'(<font color="#c63db6">Mahtnan Footwear Crate (Mythical)</font>)', cchat)
		notice('(Mahtnan Footwear Crate (Mythical))')
	}
	
	// Mahtnan Gear Design Box (Mythical)
	else if(	event.item === 4936	)
	{
		sendMessage(header+'(<font color="#c63db6">Mahtnan Gear Design Box (Mythical)</font>)', cchat)
		notice('(Mahtnan Gear Design Box (Mythical))')
	}
	// Mahtnan Weapon Design Box (Mythical)
	else if(	event.item === 4937	)
	{
		sendMessage(header+'(<font color="#c63db6">Mahtnan Weapon Design Box (Mythical)</font>)', cchat)
		notice('(Mahtnan Weapon Design Box (Mythical))')
	}
	// Mahtnan Armor Design Box (Mythical)
	else if(	event.item === 4938	)
	{
		sendMessage(header+'(<font color="#c63db6">Mahtnan Armor Design Box (Mythical)</font>)', cchat)
		notice('(Mahtnan Armor Design Box (Mythical))')
	}
	// Mahtnan Hand Armor Design Box (Mythical)
	else if(	event.item === 4939	)
	{
		sendMessage(header+'(<font color="#c63db6">Mahtnan Hand Armor Design Box (Mythical)</font>)', cchat)
		notice('(Mahtnan Hand Armor Design Box (Mythical))')
	}
	// Mahtnan Foot Armor Design Box (Mythical)
	else if(	event.item === 4940	)
	{
		sendMessage(header+'(<font color="#c63db6">Mahtnan Foot Armor Design Box (Mythical)</font>)', cchat)
		notice('(Mahtnan Foot Armor Design Box (Mythical))')
	}
	
	//Design Weapon
	// Design: Dauntless Mahtnan Twin Swords (Mythical)
	else if(	event.item === 4813		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Dauntless Mahtnan Twin Swords</font>)', cchat)
		notice('(Design: Dauntless Mahtnan Twin Swords)')
	}
	// Design: Dauntless Mahtnan Lance (Mythical)
	else if(	event.item === 4816		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Dauntless Mahtnan Lance</font>)', cchat)
		notice('(Design: Dauntless Mahtnan Lance)')
	}
	// Design: Dauntless Mahtnan Greatsword (Mythical)
	else if(	event.item === 4819		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Dauntless Mahtnan Greatsword</font>)', cchat)
		notice('(Design: Dauntless Mahtnan Greatsword)')
	}
	// Design: Dauntless Mahtnan Axe (Mythical)
	else if(	event.item === 4822		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Dauntless Mahtnan Axe</font>)', cchat)
		notice('(Design: Dauntless Mahtnan Axe)')
	}
	// Design: Occult Mahtnan Disc (Mythical)
	else if(	event.item === 4825		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Occult Mahtnan Disc</font>)', cchat)
		notice('(Design: Occult Mahtnan Disc)')
	}
	// Design: Dauntless Mahtnan Bow (Mythical)
	else if(	event.item === 4828		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Dauntless Mahtnan Bow</font>)', cchat)
		notice('(Design: Dauntless Mahtnan Bow)')
	}
	// Design: Occult Mahtnan Staff (Mythical)
	else if(	event.item === 4831		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Occult Mahtnan Staff</font>)', cchat)
		notice('(Design: Occult Mahtnan Staff)')
	}
	// Design: Occult Mahtnan Scepter (Mythical)
	else if(	event.item === 4834		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Occult Mahtnan Scepter</font>)', cchat)
		notice('(Design: Occult Mahtnan Scepter)')
	}
	// Design: Occult Mahtnan Scythe (Mythical)
	else if(	event.item === 4837		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Occult Mahtnan Scythe</font>)', cchat)
		notice('(Design: Occult Mahtnan Scythe)')
	}
	// Design: Occult Mahtnan Arcannon (Mythical)
	else if(	event.item === 4840		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Occult Mahtnan Arcannon</font>)', cchat)
		notice('(Design: Occult Mahtnan Arcannon)')
	}
	// Design: Dauntless Mahtnan Powerfists (Mythical)
	else if(	event.item === 4843		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Dauntless Mahtnan Powerfists</font>)', cchat)
		notice('(Design: Dauntless Mahtnan Powerfists)')
	}
	// Design: Occult Mahtnan Shuriken (Mythical)
	else if(	event.item === 4846		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Occult Mahtnan Shuriken</font>)', cchat)
		notice('(Design: Occult Mahtnan Shuriken)')
	}
		// Design: Dauntless Mahtnan Runeglaive (Mythical)
	else if(	event.item === 4849		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Dauntless Mahtnan Runeglaive</font>)', cchat)
		notice('(Design: Dauntless Mahtnan Runeglaive)')
	}
	
	//Design Armor
	// Design: Dauntless Mahtnan Hauberk (Mythical)
	else if(	event.item === 4852		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Dauntless Mahtnan Hauberk</font>)', cchat)
		notice('(Design: Dauntless Mahtnan Hauberk)')
	}
	// Design: Occult Mahtnan Hauberk (Mythical)
	else if(	event.item === 4855		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Occult Mahtnan Hauberk</font>)', cchat)
		notice('(Design: Occult Mahtnan Hauberk)')
	}
	// Design: Dauntless Mahtnan Cuirass (Mythical)
	else if(	event.item === 4858		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Dauntless Mahtnan Cuirass</font>)', cchat)
		notice('(Design: Dauntless Mahtnan Cuirass)')
	}
	// Design: Occult Mahtnan Cuirass (Mythical)
	else if(	event.item === 4861		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Occult Mahtnan Cuirass</font>)', cchat)
		notice('(Design: Occult Mahtnan Cuirass)')
	}
	// Design: Occult Mahtnan Robe (Mythical)
	else if(	event.item === 4864		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Occult Mahtnan Robe</font>)', cchat)
		notice('(Design: Occult Mahtnan Robe)')
	}
	
	//Design Hand
	// Design: Dauntless Mahtnan Gauntlets (Mythical)
	else if(	event.item === 4867		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Dauntless Mahtnan Gauntlets</font>)', cchat)
		notice('(Design: Dauntless Mahtnan Gauntlets)')
	}
	// Design: Occult Mahtnan Gauntlets (Mythical)
	else if(	event.item === 4870		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Occult Mahtnan Gauntlets</font>)', cchat)
		notice('(Design: Occult Mahtnan Gauntlets)')
	}
	// Design: Dauntless Mahtnan Hand Armor (Mythical)
	else if(	event.item === 4873		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Dauntless Mahtnan Hand Armor</font>)', cchat)
		notice('(Design: Dauntless Mahtnan Hand Armor)')
	}
	// Design: Occult Mahtnan Hand Armor (Mythical)
	else if(	event.item === 4876		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Occult Mahtnan Hand Armor</font>)', cchat)
		notice('(Design: Occult Mahtnan Hand Armor)')
	}
	// Design: Occult Mahtnan Hand Armor (Mythical)
	else if(	event.item === 4879		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Occult Mahtnan Hand Armor</font>)', cchat)
		notice('(Design: Occult Mahtnan Hand Armor)')
	}
	
	//Design Foot
	// Design: Dauntless Mahtnan Greaves (Mythical)
	else if(	event.item === 4882		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Dauntless Mahtnan Greaves</font>)', cchat)
		notice('(Design: Dauntless Mahtnan Greaves)')
	}
	// Design: Occult Mahtnan Greaves (Mythical)
	else if(	event.item === 4885		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Occult Mahtnan Greaves</font>)', cchat)
		notice('(Design: Occult Mahtnan Greaves)')
	}
	// Design: Dauntless Mahtnan Leather Boots (Mythical)
	else if(	event.item === 4888		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Dauntless Mahtnan Leather Boots</font>)', cchat)
		notice('(Design: Dauntless Mahtnan Leather Boots)')
	}
	// Design: Occult Mahtnan Leather Boots (Mythical)
	else if(	event.item === 4891		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Occult Mahtnan Leather Boots</font>)', cchat)
		notice('(Design: Occult Mahtnan Leather Boots)')
	}
	// Design: Dauntless Mahtnan Twin Swords (Mythical)
	else if(	event.item === 4894		)
	{
		sendMessage(header+'(<font color="#c63db6">Design: Dauntless Mahtnan Twin Swords</font>)', cchat)
		notice('(Design: Dauntless Mahtnan Twin Swords)')
	}
	
	/*
	// Kaia Gear Box [Weapon]
	else if(	event.item === 208040	)
	{
		sendMessage(header+'(<font color="#c63db6">Kaia Gear Box [Weapon]</font>)', cchat)
		notice('Kaia Gear Box [Weapon]')
	}
	// Kaia’s Gear Box [Body Armor]
	else if(	event.item === 208041	)
	{
		sendMessage(header+'(<font color="#c63db6">Kaia Gear Box [Body Armor]</font>)', cchat)
		notice('Kaia Gear Box [Body Armor]')
	}
	// Kaia’s Gear Box [Hand Armor]
	else if(	event.item === 208042	)
	{
		sendMessage(header+'(<font color="#c63db6">Kaia Gear Box [Hand Armor]</font>)', cchat)
		notice('Kaia Gear Box [Hand Armor]')
	}
	// Kaia’s Gear Box [Foot Armor]
	else if(	event.item === 208043	)
	{
		sendMessage(header+'(<font color="#c63db6">Kaia Gear Box [Foot Armor]</font>)', cchat)
		notice('Kaia Gear Box [Foot Armor]')
	}
	// Kaia’s Gear Box
	else if(	event.item === 208044
		 || 	event.item === 90923	)
	{
		sendMessage(header+'(<font color="#c63db6">Kaia Gear Box</font>)', cchat)
		notice('Kaia Gear Box')
	}
	*/
	
	/*
	// Kaia Soul Gear Box [Weapon]
	else if(	event.item === 208085	)
	{
		sendMessage(header+'(<font color="#c63db6">Kaia Soul Gear Box [Weapon]</font>)', cchat)
		notice('Kaia Soul Gear Box [Weapon]')
	}
	// Kaia Soul Gear Box [Body Armor]
	else if(	event.item === 208086	)
	{
		sendMessage(header+'(<font color="#c63db6">Kaia Soul Gear Box [Body Armor]</font>)', cchat)
		notice('Kaia Soul Gear Box [Body Armor]')
	}
	// Kaia Soul Gear Box [Hand Armor]
	else if(	event.item === 208087	)
	{
		sendMessage(header+'(<font color="#c63db6">Kaia Soul Gear Box [Hand Armor]</font>)', cchat)
		notice('Kaia Soul Gear Box [Hand Armor]')
	}
	// Kaia Soul Gear Box [Foot Armor]
	else if(	event.item === 208088	)
	{
		sendMessage(header+'(<font color="#c63db6">Kaia Soul Gear Box [Foot Armor]</font>)', cchat)
		notice('Kaia Soul Gear Box [Foot Armor]')
	}
	// Kaia Soul Gear Box
	else if(	event.item === 208089	)
	{
		sendMessage(header+'(<font color="#c63db6">Kaia Soul Gear Box</font>)', cchat)
		notice('Kaia Soul Gear Box')
	}
	*/
	
	/*
	// Exodor Superior Weapon Box
	else if(	event.item === 206950	)
	{
		sendMessage(header+'(<font color="#fff317">Exodor Superior Weapon Box</font>)', cchat)
	}
	// Exodor Superior Body Armor Box
	else if(	event.item === 206951)
	{
		sendMessage(header+'(<font color="#fff317">Exodor Superior Body Armor Box</font>)', cchat)
	}
	// Exodor Superior Hand Armor Box
	else if(	event.item === 206952)
	{
		sendMessage(header+'(<font color="#fff317">Exodor Superior Hand Armor Box</font>)', cchat)
	}
	// Exodor Superior Foot Armor Box
	else if(	event.item === 206953)
	{
		sendMessage(header+'(<font color="#fff317">Exodor Superior Foot Armor Box</font>)', cchat)
	}
	*/
	
	// Map
	else if(	event.item === 206858
		 || 	event.item === 206859
		 || 	event.item === 206860
		 || 	event.item === 206861
		 || 	event.item === 206862	)
	{
		sendMessage(header+'(<font color="#fff317">Get Map</font>)', cchat)
		notice('(Get Map)')
	}
	// Map SoH
	else if(	event.item === 206884	)
	{
		sendMessage(header+'(<font color="#fff317">Get Map SoH</font>)', cchat)
		notice('(Get Map SoH)')
	}
	
	/*
	// Hidden Wooden Crate
	else if(	event.item === 206865	)
	{
		sendMessage(header+'(<font color="#fff317">Hidden Wooden Crate</font>)', cchat)
		notice('(Hidden Wooden Crate)')
	}
	// Hidden Silver Crate
	else if(	event.item === 206864	)
	{
		sendMessage(header+'(<font color="#fff317">Hidden Silver Crate</font>)', cchat)
		notice('(Hidden Silver Crate)')
	}
	// Hidden Gold Crate
	else if(	event.item === 206863	)
	{
		sendMessage(header+'(<font color="#fff317">Hidden Gold Crate</font>)', cchat)
		notice('(Hidden Gold Crate)')
	}
	*/
	
	// Half Map
	else if(	event.item === 206855
		 || 	event.item === 206869
		 || 	event.item === 206856
		 || 	event.item === 206870	)
	{
		sendMessage(header+'(<font color="#00ff00">Half Map</font>)', cchat)
	}
	
	/*
	// Feed Weapon
	else if(	event.item === 98677	 )
	{
		sendMessage(header+'(<font color="#fff317">Golden Feed Weapon</font>)', cchat)
	}
	// Feed Armor
	else if(	event.item === 98678	)
	{
		sendMessage(header+'(<font color="#fff317">Golden Feed Armor</font>)', cchat)
	}
	*/
	
	/*
	// Azart Force Sign
	else if(	event.item === 209123	)
	{
		sendMessage(header+'(<font color="#00ff00">Azart Force Sign</font>)', cchat)
		notice('(Azart Force Sign)')
	}
	// Azart Token
	else if(	event.item === 209124	)
	{
		sendMessage(header+'(<font color="#00ff00">Azart Token</font>)', cchat)
		notice('(Azart Token)')
	}
	// Azart Expedition Badge
	else if(	event.item === 209127	)
	{
		sendMessage(header+'(<font color="#00ff00">Azart Expedition Badge</font>)', cchat)
		notice('(Azart Expedition Badge)')
	}
	*/
	
	/*
	// Card White
	else if(	event.item === 300000 || event.item === 300001 || event.item === 300002 || event.item === 300003 
		 || 	event.item === 300004 || event.item === 300005 || event.item === 300006 || event.item === 300007
		 || 	event.item === 300008 || event.item === 300009 || event.item === 300010 || event.item === 300011
		 || 	event.item === 300012 || event.item === 300013 || event.item === 300014 || event.item === 300015
		 || 	event.item === 300016 || event.item === 300017 || event.item === 300018 || event.item === 310000
		 || 	event.item === 310001 || event.item === 310002 || event.item === 310003 || event.item === 310004
		 || 	event.item === 310005 || event.item === 310006 || event.item === 310007 || event.item === 310008
		 || 	event.item === 310009 || event.item === 310010 || event.item === 310011 || event.item === 310012
		 || 	event.item === 310013 || event.item === 310014 || event.item === 310015 || event.item === 310016
		 || 	event.item === 310017 || event.item === 310018 || event.item === 310019 || event.item === 310020
		 || 	event.item === 310021 || event.item === 310022 || event.item === 310023 || event.item === 310024
		 || 	event.item === 310025 || event.item === 310026 || event.item === 310027 || event.item === 310028
		 || 	event.item === 310029 || event.item === 310030 || event.item === 310031 || event.item === 310032
		 || 	event.item === 310033 || event.item === 310034 || event.item === 310035 || event.item === 310036
		 || 	event.item === 310037 || event.item === 310038 || event.item === 320000 || event.item === 320001
		 || 	event.item === 320002 || event.item === 320003 || event.item === 320004 || event.item === 320005
		 || 	event.item === 330000 || event.item === 330001 || event.item === 330002 || event.item === 330003
		 || 	event.item === 330004 || event.item === 330005 || event.item === 330006 || event.item === 330007
		 || 	event.item === 330008 || event.item === 330009 || event.item === 330010 || event.item === 330011
		 || 	event.item === 340000 || event.item === 340001 || event.item === 340002 || event.item === 340003
		 || 	event.item === 340004 || event.item === 340005 || event.item === 340006 || event.item === 340007
		 || 	event.item === 340008 || event.item === 340009 || event.item === 340010 || event.item === 340011
		 || 	event.item === 340012 || event.item === 340013 || event.item === 340014 || event.item === 340015
		 || 	event.item === 340016 || event.item === 340017 || event.item === 340018 || event.item === 340019
		 || 	event.item === 340020	)
	{
		sendMessage(header+'(<font color="#ffffff">Card Fragment - White</font>)', cchat)
		notice('(Card Fragment - White)')
	}
	*/
	
	// Card Green
	/*
	else if(	event.item === 301000 || event.item === 301001 || event.item === 301002 || event.item === 301003 
		 || 	event.item === 301004 || event.item === 301005 || event.item === 301006 || event.item === 301007
		 || 	event.item === 301008 || event.item === 301009 || event.item === 301010 || event.item === 301011
		 || 	event.item === 301012 || event.item === 301013 || event.item === 301014 || event.item === 301015
		 || 	event.item === 301016 || event.item === 301017 || event.item === 301018 || event.item === 311000
		 || 	event.item === 311001 || event.item === 311002 || event.item === 311003 || event.item === 311004
		 || 	event.item === 311005 || event.item === 311006 || event.item === 311007 || event.item === 311008
		 || 	event.item === 311009 || event.item === 311010 || event.item === 311011 || event.item === 311012
		 || 	event.item === 311013 || event.item === 311014 || event.item === 311015 || event.item === 311016
		 || 	event.item === 311017 || event.item === 311018 || event.item === 311019 || event.item === 311020
		 || 	event.item === 311021 || event.item === 311022 || event.item === 311023 || event.item === 311024
		 || 	event.item === 311025 || event.item === 311026 || event.item === 311027 || event.item === 311028
		 || 	event.item === 311029 || event.item === 311030 || event.item === 311031 || event.item === 311032
		 || 	event.item === 311033 || event.item === 311034 || event.item === 311035 || event.item === 311036
		 || 	event.item === 311037 || event.item === 311038 || event.item === 321000 || event.item === 321001
		 || 	event.item === 321002 || event.item === 321003 || event.item === 321004 || event.item === 321005
		 || 	event.item === 331000 || event.item === 331001 || event.item === 331002 || event.item === 331003
		 || 	event.item === 331004 || event.item === 331005 || event.item === 331006 || event.item === 331007
		 || 	event.item === 331008 || event.item === 331009 || event.item === 331010 || event.item === 331011
		 || 	event.item === 341000 || event.item === 341001 || event.item === 341002 || event.item === 341003
		 || 	event.item === 341004 || event.item === 341005 || event.item === 341006 || event.item === 341007
		 || 	event.item === 341008 || event.item === 341009 || event.item === 341010 || event.item === 341011
		 || 	event.item === 341012 || event.item === 341013 || event.item === 341014 || event.item === 341015
		 || 	event.item === 341016 || event.item === 341017 || event.item === 341018 || event.item === 341019
		 || 	event.item === 341020
		 || 	event.item === 301019 || event.item === 301020 || event.item === 301021 || event.item === 301022
		 || 	event.item === 301023 || event.item === 301024 || event.item === 301025 || event.item === 301026	)
	{
		sendMessage(header+'(<font color="#00ff00">Card Fragment - Green</font>)', cchat)
		notice('(Card Fragment - Green)')
	}
	*/
	
	// Event Item
	else if(	event.item === 155003	)
	{
		sendMessage(header+'(<font color="#00ff00">Unique Seashell I</font>)', cchat)
		notice('(Unique Seashell I)')
	}
	
	/*
	// Avarice Transformation Vellum Token
	else if(	event.item === 156409	)
	{
		sendMessage(header+'(<font color="#fff317">Avarice Transformation Vellum Token</font>)', cchat)
		notice('(Avarice Transformation Vellum Token)')
	}
	// Transformation Vellum Token
	else if(	event.item === 156408	)
	{
		sendMessage(header+'(<font color="#fff317">Transformation Vellum Token</font>)', cchat)
		notice('(Transformation Vellum Token)')
	}
	// Unstable Transformation Vellum Token
	else if(	event.item === 156407	)
	{
		sendMessage(header+'(<font color="#fff317">Unstable Transformation Vellum Token</font>)', cchat)
		notice('(Unstable Transformation Vellum Token)')
	}
	// Upgrade Vellum Token
	else if(	event.item === 156410	)
	{
		sendMessage(header+'(<font color="#fff317">Upgrade Vellum Token</font>)', cchat)
		notice('(Upgrade Vellum Token)')
	}
	*/
	
	//Unstable Option Change Scroll(Green)
	//[Weapon]
	/*
	else if(	event.item === 204492	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Option Change Scroll </font>'+'<font color="#00ff00">[Weapon]</font>)', cchat)
	}
	//[Armor]
	else if(	event.item === 204493	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Option Change Scroll </font>'+'<font color="#00ff00">[Armor]</font>)', cchat)
	}
	//[Hand Armor]
	else if(	event.item === 204494	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Option Change Scroll </font>'+'<font color="#00ff00">[Hand Armor]</font>)', cchat)
	}
	//[Foot Armor]
	else if(	event.item === 204495	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Option Change Scroll </font>'+'<font color="#00ff00">[Foot Armor]</font>)', cchat)
	}
	//[Belt]
	else if(	event.item === 204496	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Option Change Scroll </font>'+'<font color="#00ff00">[Belt]</font>)', cchat)
	}
	//[Mask]
	else if(	event.item === 204497	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Option Change Scroll </font>'+'<font color="#00ff00">[Mask]</font>)', cchat)
	}
	//[Brooch]
	else if(	event.item === 204498	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Option Change Scroll </font>'+'<font color="#00ff00">[Brooch]</font>)', cchat)
	}
	//[Ring]
	else if(	event.item === 204499	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Option Change Scroll </font>'+'<font color="#00ff00">[Ring]</font>)', cchat)
	}
	//[Necklace]
	else if(	event.item === 204500	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Option Change Scroll </font>'+'<font color="#00ff00">[Necklace]</font>)', cchat)
	}
	//[Earrings]
	else if(	event.item === 204501	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Option Change Scroll </font>'+'<font color="#00ff00">[Earrings]</font>)', cchat)
	}
	//[Circlet]
	else if(	event.item === 204502	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Option Change Scroll </font>'+'<font color="#00ff00">[Circlet]</font>)', cchat)
	}
	*/
	
	/*
	//Option Change Scroll(Blue)
	//[Weapon]
	else if(	event.item === 204503	)
	{
		sendMessage(header+'(<font color="#0391c4">Option Change Scroll </font>'+'<font color="#0391c4">[Weapon]</font>)', cchat)
	}
	//[Armor]
	else if(	event.item === 204504	)
	{
		sendMessage(header+'(<font color="#0391c4">Option Change Scroll </font>'+'<font color="#0391c4">[Armor]</font>)', cchat)
	}
	//[Hand Armor]
	else if(	event.item === 204505	)
	{
		sendMessage(header+'(<font color="#0391c4">Option Change Scroll </font>'+'<font color="#0391c4">[Hand Armor]</font>)', cchat)
	}
	//[Foot Armor]
	else if(	event.item === 204506	)
	{
		sendMessage(header+'(<font color="#0391c4">Option Change Scroll </font>'+'<font color="#0391c4">[Foot Armor]</font>)', cchat)
	}
	//[Belt]
	else if(	event.item === 204507	)
	{
		sendMessage(header+'(<font color="#0391c4">Option Change Scroll </font>'+'<font color="#0391c4">[Belt]</font>)', cchat)
	}
	//[Mask]
	else if(	event.item === 204508	)
	{
		sendMessage(header+'(<font color="#0391c4">Option Change Scroll </font>'+'<font color="#0391c4">[Mask]</font>)', cchat)
	}
	//[Brooch]
	else if(	event.item === 204509	)
	{
		sendMessage(header+'(<font color="#0391c4">Option Change Scroll </font>'+'<font color="#0391c4">[Brooch]</font>)', cchat)
	}
	//[Ring]
	else if(	event.item === 204510	)
	{
		sendMessage(header+'(<font color="#0391c4">Option Change Scroll </font>'+'<font color="#0391c4">[Ring]</font>)', cchat)
	}
	//[Necklace]
	else if(	event.item === 204511	)
	{
		sendMessage(header+'(<font color="#0391c4">Option Change Scroll </font>'+'<font color="#0391c4">[Necklace]</font>)', cchat)
	}
	//[Earrings]
	else if(	event.item === 204512	)
	{
		sendMessage(header+'(<font color="#0391c4">Option Change Scroll </font>'+'<font color="#0391c4">[Earrings]</font>)', cchat)
	}
	//[Circlet]
	else if(	event.item === 204513	)
	{
		sendMessage(header+'(<font color="#0391c4">Option Change Scroll </font>'+'<font color="#0391c4">[Circlet]</font>)', cchat)
	}
	
	//Option Change Scroll(Gold)
	//[Gear]
	else if(	event.item === 204514	)
	{
		sendMessage(header+'(<font color="#fff317">Option Boost Scroll [Gear]</font>)', cchat)
		notice('(Option Boost Scroll [Gear])')
	}
	//[Accessory]
	else if(	event.item === 204515	)
	{
		sendMessage(header+'(<font color="#fff317">Option Boost Scroll [Accessory]</font>)', cchat)
		notice('(Option Boost Scroll [Accessory])')
	}
	
	//Greedhead Option Change Scroll (Gold)
	//[Weapon]
	else if(	event.item === 204516	)
	{
		sendMessage(header+'(<font color="#fff317">Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Weapon]</font>)', cchat)
		notice('(Greedhead Option Change Scroll [Weapon])')
	}
	//[Armor]
	else if(	event.item === 204517	)
	{
		sendMessage(header+'(<font color="#fff317">Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Armor]</font>)', cchat)
		notice('(Greedhead Option Change Scroll [Armor])')
	}
	//[Hand Armor]
	else if(	event.item === 204518	)
	{
		sendMessage(header+'(<font color="#fff317">Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Hand Armor]</font>)', cchat)
		notice('(Greedhead Option Change Scroll [Hand Armor])')
	}
	//[Foot Armor]
	else if(	event.item === 204519	)
	{
		sendMessage(header+'(<font color="#fff317">Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Foot Armor]</font>)', cchat)
		notice('(Greedhead Option Change Scroll [Foot Armor])')
	}
	//[Belt]
	else if(	event.item === 204520	)
	{
		sendMessage(header+'(<font color="#fff317">Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Belt]</font>)', cchat)
		notice('(Greedhead Option Change Scroll [Belt])')
	}
	//[Mask]
	else if(	event.item === 204521	)
	{
		sendMessage(header+'(<font color="#fff317">Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Mask]</font>)', cchat)
		notice('(Greedhead Option Change Scroll [Mask])')
	}
	//[Brooch]
	else if(	event.item === 204522	)
	{
		sendMessage(header+'(<font color="#fff317">Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Brooch]</font>)', cchat)
		notice('(Greedhead Option Change Scroll [Brooch])')
	}
	*/
	
	//[Ring]
	else if(	event.item === 204523	)
	{
		sendMessage(header+'(<font color="#fff317">Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Ring]</font>)', cchat)
		notice('(Greedhead Option Change Scroll [Ring])')
	}
	//[Necklace]
	else if(	event.item === 204524	)
	{
		sendMessage(header+'(<font color="#fff317">Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Necklace]</font>)', cchat)
		notice('(Greedhead Option Change Scroll [Necklace])')
	}
	//[Earrings]
	else if(	event.item === 204525	)
	{
		sendMessage(header+'(<font color="#fff317">Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Earrings]</font>)', cchat)
		notice('(Greedhead Option Change Scroll [Earrings])')
	}
	//[Circlet]
	else if(	event.item === 204526	)
	{
		sendMessage(header+'(<font color="#fff317">Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Circlet]</font>)', cchat)
		notice('(Greedhead Option Change Scroll [Circlet])')
	}
	
	/*
	//Unstable Soul Option Change Scroll(Green)
	//[Weapon]
	else if(	event.item === 204541	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Soul Option Change Scroll </font>'+'<font color="#00ff00">[Weapon]</font>)', cchat)
	}
	//[Armor]
	else if(	event.item === 204542	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Soul Option Change Scroll </font>'+'<font color="#00ff00">[Armor]</font>)', cchat)
	}
	//[Hand Armor]
	else if(	event.item === 204543	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Soul Option Change Scroll </font>'+'<font color="#00ff00">[Hand Armor]</font>)', cchat)
	}
	//[Foot Armor]
	else if(	event.item === 204544	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Soul Option Change Scroll </font>'+'<font color="#00ff00">[Foot Armor]</font>)', cchat)
	}
	//[Mask]
	else if(	event.item === 209400	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Soul Option Change Scroll </font>'+'<font color="#00ff00">[Mask]</font>)', cchat)
	}
	//[Brooch]
	else if(	event.item === 209401	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Soul Option Change Scroll </font>'+'<font color="#00ff00">[Brooch]</font>)', cchat)
	}
	//[Belt]
	else if(	event.item === 209402	)
	{
		sendMessage(header+'(<font color="#00ff00">Unstable Soul Option Change Scroll </font>'+'<font color="#00ff00">[Belt]</font>)', cchat)
	}
	
	//Soul Option Change Scroll(Blue)
	//[Weapon]
	else if(	event.item === 204529	)
	{
		sendMessage(header+'(<font color="#0391c4">Soul Option Change Scroll </font>'+'<font color="#0391c4">[Weapon]</font>)', cchat)
	}
	//[Armor]
	else if(	event.item === 204530	)
	{
		sendMessage(header+'(<font color="#0391c4">Soul Option Change Scroll </font>'+'<font color="#0391c4">[Armor]</font>)', cchat)
	}
	//[Hand Armor]
	else if(	event.item === 204531	)
	{
		sendMessage(header+'(<font color="#0391c4">Soul Option Change Scroll </font>'+'<font color="#0391c4">[Hand Armor]</font>)', cchat)
	}
	//[Foot Armor]
	else if(	event.item === 204532	)
	{
		sendMessage(header+'(<font color="#0391c4">Soul Option Change Scroll </font>'+'<font color="#0391c4">[Foot Armor]</font>)', cchat)
	}
	//[Mask]
	else if(	event.item === 209403	)
	{
		sendMessage(header+'(<font color="#0391c4">Soul Option Change Scroll </font>'+'<font color="#0391c4">[Mask]</font>)', cchat)
	}
	//[Brooch]
	else if(	event.item === 209404	)
	{
		sendMessage(header+'(<font color="#0391c4">Soul Option Change Scroll </font>'+'<font color="#0391c4">[Brooch]</font>)', cchat)
	}
	//[Belt]
	else if(	event.item === 209405	)
	{
		sendMessage(header+'(<font color="#0391c4">Soul Option Change Scroll </font>'+'<font color="#0391c4">[Belt]</font>)', cchat)
	}
	*/
	
	/*
	//Soul Greedhead Option Change Scroll (Gold)
	//[Weapon]
	else if(	event.item === 204533	)
	{
		sendMessage(header+'(<font color="#fff317">Soul Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Weapon]</font>)', cchat)
		notice('(Soul Greedhead Option Change Scroll [Weapon])')
	}
	//[Armor]
	else if(	event.item === 204534	)
	{
		sendMessage(header+'(<font color="#fff317">Soul Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Armor]</font>)', cchat)
		notice('(Soul Greedhead Option Change Scroll [Armor])')
	}
	//[Hand Armor]
	else if(	event.item === 204535	)
	{
		sendMessage(header+'(<font color="#fff317">Soul Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Hand Armor]</font>)', cchat)
		notice('(Soul Greedhead Option Change Scroll [Hand Armor])')
	}
	//[Foot Armor]
	else if(	event.item === 204536	)
	{
		sendMessage(header+'(<font color="#fff317">Soul Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Foot Armor]</font>)', cchat)
		notice('(Soul Greedhead Option Change Scroll [Foot Armor])')
	}
	*/
	
	//Soul Greedhead Option Change Scroll (Gold)
	//[Mask]
	else if(	event.item === 209406	)
	{
		sendMessage(header+'(<font color="#fff317">Soul Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Mask]</font>)', cchat)
		notice('(Soul Greedhead Option Change Scroll [Mask])')
	}
	//[Brooch]
	else if(	event.item === 209407	)
	{
		sendMessage(header+'(<font color="#fff317">Soul Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Brooch]</font>)', cchat)
		notice('(Soul Greedhead Option Change Scroll [Brooch])')
	}
	//[Belt]
	else if(	event.item === 209408	)
	{
		sendMessage(header+'(<font color="#fff317">Soul Greedhead Option Change Scroll </font>'+'<font color="#fff317">[Belt]</font>)', cchat)
		notice('(Soul Greedhead Option Change Scroll [Belt])')
	}
	
	//Greedy Mahtnan Option Change Scroll (Gold)
	//[Weapon]
	else if(	event.item === 4915	)
	{
		sendMessage(header+'(<font color="#fff317">Greedy Mahtnan Option Change Scroll </font>'+'<font color="#fff317">[Weapon]</font>)', cchat)
		notice('(Greedy Mahtnan Option Change Scroll [Weapon])')
	}
	//[Armor]
	else if(	event.item === 4916	)
	{
		sendMessage(header+'(<font color="#fff317">Greedy Mahtnan Option Change Scroll </font>'+'<font color="#fff317">[Armor]</font>)', cchat)
		notice('(Greedy Mahtnan Option Change Scroll [Armor])')
	}
	//[Hand Armor]
	else if(	event.item === 4917	)
	{
		sendMessage(header+'(<font color="#fff317">Greedy Mahtnan Option Change Scroll </font>'+'<font color="#fff317">[Hand Armor]</font>)', cchat)
		notice('(Greedy Mahtnan Option Change Scroll [Hand Armor])')
	}
	//[Foot Armor]
	else if(	event.item === 4918	)
	{
		sendMessage(header+'(<font color="#fff317">Greedy Mahtnan Option Change Scroll </font>'+'<font color="#fff317">[Foot Armor]</font>)', cchat)
		notice('(Greedy Mahtnan Option Change Scroll [Foot Armor])')
	}
	
	//Mahtnan Option Boost Scroll (Gold)
	//[Weapon]
	else if(	event.item === 4899	)
	{
		sendMessage(header+'(<font color="#fff317">Mahtnan Option Boost Scroll </font>'+'<font color="#fff317">[Weapon]</font>)', cchat)
		notice('(Mahtnan Option Boost Scroll [Weapon])')
	}
	//[Armor]
	else if(	event.item === 4900	)
	{
		sendMessage(header+'(<font color="#fff317">Mahtnan Option Boost Scroll </font>'+'<font color="#fff317">[Armor]</font>)', cchat)
		notice('(Mahtnan Option Boost Scroll [Armor])')
	}
	//[Hand Armor]
	else if(	event.item === 4901	)
	{
		sendMessage(header+'(<font color="#fff317">Mahtnan Option Boost Scroll </font>'+'<font color="#fff317">[Hand Armor]</font>)', cchat)
		notice('(Mahtnan Option Boost Scroll [Hand Armor])')
	}
	//[Foot Armor]
	else if(	event.item === 4902	)
	{
		sendMessage(header+'(<font color="#fff317">Mahtnan Option Boost Scroll </font>'+'<font color="#fff317">[Foot Armor]</font>)', cchat)
		notice('(Mahtnan Option Boost Scroll [Foot Armor])')
	}
	
	/*
	//Azart Force Loot Chest
	else if(	event.item === 98996	)
	{
		sendMessage(header+'(<font color="#00ff00">Azart Force Loot </font>'+'<font color="#00ff00">Chest</font>)', cchat)
	}
	//Azart Force War Trophy Chest
	else if(	event.item === 98997	)
	{
		sendMessage(header+'(<font color="#00ff00">Azart Force War Trophy </font>'+'<font color="#00ff00">Chest</font>)', cchat)
	}
	//Thulsan Forces Loot Chest
	else if(	event.item === 99009	)
	{
		sendMessage(header+'(<font color="#00ff00">Thulsan Forces Loot </font>'+'<font color="#00ff00">Chest</font>)', cchat)
	}
	//Thulsan Forces War Trophy Chest
	else if(	event.item === 99010	)
	{
		sendMessage(header+'(<font color="#00ff00">Thulsan Forces War Trophy </font>'+'<font color="#00ff00">Chest</font>)', cchat)
	}
	*/
	
	/*
	//Kaia's Soul Cryolite
	else if(	event.item === 98998	)
	{
		sendMessage(header+'(<font color="#fff317">Kaia Soul </font>'+'<font color="#fff317">Cryolite</font>)', cchat)
		notice('(Kaia Soul Cryolite)')
	}
	*/
	
	//Mahtnan Jewel
	else if(	event.item === 4919	)
	{
		sendMessage(header+'(<font color="#fff317">Mahtnan </font>'+'<font color="#fff317">Jewel</font>)', cchat)
		notice('(Mahtnan Jewel)')
	}
	
	/*
	//Kaia's Soul Token
	else if(	event.item === 207751	)
	{
		sendMessage(header+'(<font color="#fff317">Kaia Soul </font>'+'<font color="#fff317">Token</font>)', cchat)
		notice('(Kaia Soul Token)')
	}
	*/
	
	//Brooch Etching
	// I
	/*
	else if(	event.item === 6958 	)
	{
		sendMessage(header+'(<font color="#ffffff">Brooch Etching </font>'+'<font color="#ffffff">Pumped I</font>)', cchat)
	}
	else if(	event.item === 6959		)
	{
		sendMessage(header+'(<font color="#ffffff">Brooch Etching </font>'+'<font color="#ffffff">Keen I</font>)', cchat)
	}
	else if(	event.item === 6960		)
	{
		sendMessage(header+'(<font color="#ffffff">Brooch Etching </font>'+'<font color="#ffffff">Swift I [RIP]</font>)', cchat)
	}
	// II
	else if(	event.item === 6961		)
	{
		sendMessage(header+'(<font color="#00ff00">Brooch Etching </font>'+'<font color="#00ff00">Pumped II</font>)', cchat)
	}
	else if(	event.item === 6962		)
	{
		sendMessage(header+'(<font color="#00ff00">Brooch Etching </font>'+'<font color="#00ff00">Keen II</font>)', cchat)
	}
	else if(	event.item === 6963		)
	{
		sendMessage(header+'(<font color="#00ff00">Brooch Etching </font>'+'<font color="#00ff00">Swift II [RIP]</font>)', cchat)
	}
	else if(	event.item === 6964 	)
	{
		sendMessage(header+'(<font color="#00ff00">Brooch Etching </font>'+'<font color="#00ff00">Relentless Pumped II</font>)', cchat)
	}
	else if(	event.item === 6965		)
	{
		sendMessage(header+'(<font color="#00ff00">Brooch Etching </font>'+'<font color="#00ff00">Relentless Keen II</font>)', cchat)
	}
	else if(	event.item === 6966		)
	{
		sendMessage(header+'(<font color="#00ff00">Brooch Etching </font>'+'<font color="#00ff00">Relentless Swift II [RIP]</font>)', cchat)
	}
	// III
	else if(	event.item === 6967 	)
	{
		sendMessage(header+'(<font color="#0391c4">Brooch Etching </font>'+'<font color="#0391c4">Pumped III</font>)', cchat)
	}
	else if(	event.item === 6968		)
	{
		sendMessage(header+'(<font color="#0391c4">Brooch Etching </font>'+'<font color="#0391c4">Keen III</font>)', cchat)
	}
	else if(	event.item === 6969		)
	{
		sendMessage(header+'(<font color="#0391c4">Brooch Etching </font>'+'<font color="#0391c4">Swift III [RIP]</font>)', cchat)
	}
	else if(	event.item === 6970 	)
	{
		sendMessage(header+'(<font color="#0391c4">Brooch Etching </font>'+'<font color="#0391c4">Relentless Pumped III</font>)', cchat)
	}
	else if(	event.item === 6971		)
	{
		sendMessage(header+'(<font color="#0391c4">Brooch Etching </font>'+'<font color="#0391c4">Relentless Keen III</font>)', cchat)
	}
	else if(	event.item === 6972		)
	{
		sendMessage(header+'(<font color="#0391c4">Brooch Etching </font>'+'<font color="#0391c4">Relentless Swift III [RIP]</font>)', cchat)
	}
	// IV
	else if(	event.item === 6973 	)
	{
		sendMessage(header+'(<font color="#fff317">Brooch Etching </font>'+'<font color="#fff317">Pumped IV</font>)', cchat)
		notice('Brooch Etching Pumped IV)')
	}
	else if(	event.item === 6974		)
	{
		sendMessage(header+'(<font color="#fff317">Brooch Etching </font>'+'<font color="#fff317">Keen IV</font>)', cchat)
		notice('Brooch Etching Keen IV)')
	}
	else if(	event.item === 6975		)
	{
		sendMessage(header+'(<font color="#fff317">Brooch Etching </font>'+'<font color="#fff317">Swift IV [RIP]</font>)', cchat)
		notice('Brooch Etching Swift IV [RIP])')
	}
	else if(	event.item === 6976 	)
	{
		sendMessage(header+'(<font color="#fff317">Brooch Etching </font>'+'<font color="#fff317">Relentless Pumped IV</font>)', cchat)
		notice('Brooch Etching Relentless Pumped IV)')
	}
	else if(	event.item === 6977		)
	{
		sendMessage(header+'(<font color="#fff317">Brooch Etching </font>'+'<font color="#fff317">Relentless Keen IV</font>)', cchat)
		notice('Brooch Etching Relentless Keen IV)')
	}
	else if(	event.item === 6978		)
	{
		sendMessage(header+'(<font color="#fff317">Brooch Etching </font>'+'<font color="#fff317">Relentless Swift IV [RIP]</font>)', cchat)
		notice('Brooch Etching Relentless Swift IV [RIP])')
	}
	*/
	
	// Partner : RK-9 (Rare)
	else if(	event.item === 207361 	)
	{
		sendMessage(header+'(<font color="#0391c4">Partner : RK-9 </font>'+'<font color="#0391c4">(Rare)</font>)', cchat)
	}
	
	// Partner : RK-9 (Superior)
	else if(	event.item === 207362	)
	{
		sendMessage(header+'(<font color="#fff317">Partner : RK-9 </font>'+'<font color="#fff317">(Superior)</font>)', cchat)
		notice('Partner : RK-9 (Superior)')
	}
	
	// Partner : Kalligar (Rare)
	else if(	event.item === 205738 	)
	{
		sendMessage(header+'(<font color="#0391c4">Partner : Kalligar </font>'+'<font color="#0391c4">(Rare)</font>)', cchat)
	}
	
	// Partner : Kalligar (Superior)
	else if(	event.item === 205739	)
	{
		sendMessage(header+'(<font color="#fff317">Partner : Kalligar </font>'+'<font color="#fff317">(Superior)</font>)', cchat)
		notice('Partner : Kalligar (Superior)')
	}
	
	// Hagufna Cape
	else if(	event.item === 270105	|| 	event.item === 270110	|| 	event.item === 270111	)
	{
		sendMessage(header+'(<font color="#fff317">Hagufna </font>'+'<font color="#fff317">Cape</font>)', cchat)
		notice('Hagufna Cape')
	}
	
	// Sharp Black Core
	else if(	event.item === 89911	)
	{
		sendMessage(header+'(<font color="#fff317">Sharp Black </font>'+'<font color="#fff317">Core</font>)', cchat)
		notice('Sharp Black Core')
	}
	
	// Hard Black Core Shard
	else if(	event.item === 89912	)
	{
		sendMessage(header+'(<font color="#fff317">Hard Black Core </font>'+'<font color="#fff317">Shard</font>)', cchat)
		notice('Hard Black Core Shard')
	}
	
	// Extreme Key
	else if(	event.item === 155520	)
	{
		sendMessage(header+'(<font color="#fff317">Extreme </font>'+'<font color="#fff317">Key</font>)', cchat)
		notice('Extreme Key')
	}
	
	// Hagufna Weapon Omament
	else if(	event.item === 270119	|| 	event.item === 270124	|| 	event.item === 270125	)
	{
		sendMessage(header+'(<font color="#fff317">Hagufna </font>'+'<font color="#fff317">Weapon Omament</font>)', cchat)
		notice('Hagufna Weapon Omament')
	}
	
	// Hagufna Greatsword
	else if(	event.item === 270126	|| 	event.item === 270131	|| 	event.item === 270132	)
	{
		sendMessage(header+'(<font color="#fff317">Hagufna </font>'+'<font color="#fff317">Greatsword</font>)', cchat)
		notice('Hagufna Greatsword')
	}
	
	// Evil God Lance
	else if(	event.item === 270957	|| 	event.item === 270958	|| 	event.item === 270959	
			|| 	event.item === 270960	|| 	event.item === 270961	||	event.item === 270962 || event.item === 270963	)
	{
		sendMessage(header+'(<font color="#fff317">Evil God </font>'+'<font color="#fff317">Lance</font>)', cchat)
		notice('Evil God Lance')
	}
	
	// Evil God Cape
	else if(	event.item === 270971	|| 	event.item === 270975	|| 	event.item === 270976	)
	{
		sendMessage(header+'(<font color="#fff317">Evil God </font>'+'<font color="#fff317">Cape</font>)', cchat)
		notice('Evil God Cape')
	}
	
	// Nightmare Undying Warlord Body Armor Chest
	else if(	event.item === 207759	)
	{
		sendMessage(header+'(<font color="#fff317">Nightmare Undying Warlord </font>'+'<font color="#fff317">Body Armor Chest</font>)', cchat)
		notice('Nightmare Undying Warlord Body Armor Chest')
	}
	
	// Gardan Armor Chest
	else if(	event.item === 207760	)
	{
		sendMessage(header+'(<font color="#fff317">Gardan </font>'+'<font color="#fff317">Body Armor Chest</font>)', cchat)
		notice('Gardan Armor Chest')
	}
	
	// Gardan Axe
	else if(	event.item === 272793	|| 	event.item === 272798	|| 	event.item === 272799	|| 	event.item === 273135	)
	{
		sendMessage(header+'(<font color="#fff317">Gardan </font>'+'<font color="#fff317">Axe</font>)', cchat)
		notice('Gardan Axe')
	}
	
	// Gardan Cloak
	else if(	event.item === 272807	|| 	event.item === 272812	|| 	event.item === 272813	|| 	event.item === 273137	)
	{
		sendMessage(header+'(<font color="#fff317">Gardan </font>'+'<font color="#fff317">Cloak</font>)', cchat)
		notice('Gardan Cloak')
	}
	
	// Eternal Brawler Powerfists
	else if(	event.item === 271495	|| 	event.item === 271494	|| 	event.item === 271493	|| 	event.item === 271492
			|| 	event.item === 271491	|| 	event.item === 271490	||	event.item === 271489	)
	{
		sendMessage(header+'(<font color="#fff317">Eternal Brawler </font>'+'<font color="#fff317">Powerfists</font>)', cchat)
		notice('Eternal Brawler Powerfists')
	}
	
	//Essence
	/*
	else if(	event.item === 89913	)
	{
		sendMessage(header+'(<font color="#fff317">Solar </font>'+'<font color="#fff317">Essence</font>)', cchat)
	}
	else if(	event.item === 89914	)
	{
		sendMessage(header+'(<font color="#fff317">Lava </font>'+'<font color="#fff317">Essence</font>)', cchat)
	}
	else if(	event.item === 89915	)
	{
		sendMessage(header+'(<font color="#fff317">Glacial </font>'+'<font color="#fff317">Essence</font>)', cchat)
	}
	else if(	event.item === 89916	)
	{
		sendMessage(header+'(<font color="#fff317">Frost </font>'+'<font color="#fff317">Essence</font>)', cchat)
	}
	else if(	event.item === 89918	)
	{
		sendMessage(header+'(<font color="#fff317">Lighting </font>'+'<font color="#fff317">Essence</font>)', cchat)
	}
	*/
	
	//Stone
	else if(	event.item === 89965	)
	{
		sendMessage(header+'(<font color="#fff317">Refined Solar </font>'+'<font color="#fff317">Stone</font>)', cchat)
		notice('Refined Solar Stone')
	}
	else if(	event.item === 89966	)
	{
		sendMessage(header+'(<font color="#fff317">Refined Lava </font>'+'<font color="#fff317">Stone</font>)', cchat)
		notice('Refined Lava Stone')
	}
	else if(	event.item === 89967	)
	{
		sendMessage(header+'(<font color="#fff317">Refined Glacial </font>'+'<font color="#fff317">Stone</font>)', cchat)
		notice('Refined Glacial Stone')
	}
	else if(	event.item === 89968	)
	{
		sendMessage(header+'(<font color="#fff317">Refined Frost </font>'+'<font color="#fff317">Stone</font>)', cchat)
		notice('Refined Frost Stone')
	}
	else if(	event.item === 89969	)
	{
		sendMessage(header+'(<font color="#fff317">Refined Lighting </font>'+'<font color="#fff317">Stone (Ring)</font>)', cchat)
		notice('Refined Lighting Stone (Ring)')
	}
	else if(	event.item === 89970	)
	{
		sendMessage(header+'(<font color="#fff317">Refined Lighting </font>'+'<font color="#fff317">Stone (Earrings)</font>)', cchat)
		notice('Refined Lighting Stone (Earrings)')
	}
	else if(	event.item === 89971	)
	{
		sendMessage(header+'(<font color="#fff317">Refined Lighting </font>'+'<font color="#fff317">Stone (Necklace)</font>)', cchat)
		notice('Refined Lighting Stone (Necklace)')
	}
	else if(	event.item === 89972	)
	{
		sendMessage(header+'(<font color="#fff317">Refined Lighting </font>'+'<font color="#fff317">Stone (Belt)</font>)', cchat)
		notice('Refined Lighting Stone (Belt)')
	}
	else if(	event.item === 89973	)
	{
		sendMessage(header+'(<font color="#fff317">Refined Lighting </font>'+'<font color="#fff317">Stone (Brooch)</font>)', cchat)
		notice('Refined Lighting Stone (Brooch)')
	}
	
	// Test Mode
	else if(	event.item === 2	|| 	event.item === 1	/*|| 	event.item === 209617*/	)
	{
		sendMessage(header+'(<font color="#ffffff">Test</font>)', cchat)
		notice('(Test)')
	}
	// Test Mode 2
	else if(	event.item === 200	|| 	event.item === 100	/*|| 	event.item === 209667*/	)
	{
		sendMessage(header+'(<font color="#ffffff">Test 2</font>)', cchat)
		notice('(Test 2)')
	}
})

//Function

	function notice(anmsg) {
			d.send('S_DUNGEON_EVENT_MESSAGE', 2, {
            type: 43,
            chat: false,
            channel: 0,
            message: anmsg
        })
    }

	function sendMessage(msg, chl) {
		if (!ptenabled)
		{
			d.send('S_CHAT', 4 , {
			channel: chl ? chl : 7,
			name: ' ',
			message: msg
			});
		}
		else
		{
			d.send('C_CHAT', 1 , {
			channel: chl ? chl : 21,
			message: msg
			});
		}
	}
}
