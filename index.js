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
	d.hook('S_SPAWN_DROPITEM', 8, (event) => {
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
	
	if(		event.item === 300
	||  	event.item === 400
	||  	event.item === 500
	||  	event.item === 600	)
		{
		sendMessage(header+'(<font color="#ffffff">Item </font>'+'<font color="#ffffff">Drop</font>)', cchat)
		notice('(Item Drop)')
		}

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
	/*
	else if(	event.item === 89509 
		 ||  	event.item === 89517 
		 || 	event.item === 89525
		 || 	event.item === 89533
		 || 	event.item === 89545
		 || 	event.item === 89549
		 || 	event.item === 89561
		 || 	event.item === 89569
		 || 	event.item === 89577
		 || 	event.item === 89585
		 || 	event.item === 89589
		 || 	event.item === 89601
		 || 	event.item === 89605
	)
	
		sendMessage(header+'(<font color="#ffffff">Weapon </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	*/
	
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
	/*
	else if(	event.item === 89510 
		 || 	event.item === 89518
		 || 	event.item === 89526
		 || 	event.item === 89534
		 || 	event.item === 89546
		 || 	event.item === 89550
		 || 	event.item === 89562
		 || 	event.item === 89570
		 || 	event.item === 89578
		 || 	event.item === 89586
		 || 	event.item === 89590
		 || 	event.item === 89602
		 || 	event.item === 89606
		 )
		 
		sendMessage(header+'(<font color="#00ff00">Weapon </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	*/
	
	// Weapon Gold lvl 69 Twin Swords / Lance / Greatsword / Axe / Disc / Bow / Staff / Scepter / Scythes / Arcannon / Powerfists / Shuriken / Runeglaive
	//1*3
	
	else if(	event.item === 89511 	)
	{ 
		sendMessage(header+'(<font color="#7070ff">Twin Swords </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89519 	)
	{ 
		sendMessage(header+'(<font color="#7070ff">Lance </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89527 	)
	{ 
		sendMessage(header+'(<font color="#7070ff">Greatsword </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89535 	)
	{ 
		sendMessage(header+'(<font color="#7070ff">Axe </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89547 	)
	{ 
		sendMessage(header+'(<font color="#7070ff">Disc </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89551 	)
	{	 
		sendMessage(header+'(<font color="#7070ff">Bow </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89563 	)
	{	 
		sendMessage(header+'(<font color="#7070ff">Staff </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89571 	)
	{ 
		sendMessage(header+'(<font color="#7070ff">Scepter </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89579 	)
	{ 
		sendMessage(header+'(<font color="#7070ff">Scythes </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89587 	)
	{ 
		sendMessage(header+'(<font color="#7070ff">Arcannon </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89591 	)
	{ 
		sendMessage(header+'(<font color="#7070ff">Powerfists </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89603 	)
	{ 
		sendMessage(header+'(<font color="#7070ff">Shuriken </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89607 	)
	{
		sendMessage(header+'(<font color="#7070ff">Runeglaive </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	/*
	else if(	event.item === 89511 
		 || 	event.item === 89519
		 || 	event.item === 89527
		 || 	event.item === 89535
		 || 	event.item === 89547
		 || 	event.item === 89551
		 || 	event.item === 89563
		 || 	event.item === 89571
		 || 	event.item === 89579
		 || 	event.item === 89587
		 || 	event.item === 89591
		 || 	event.item === 89603
		 || 	event.item === 89607
		 )
		 
		sendMessage(header+'(<font color="#7070ff">Weapon </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	*/
	
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
	/*	
	else if(	event.item === 89512 
		 || 	event.item === 89520
		 || 	event.item === 89528
		 || 	event.item === 89536
		 || 	event.item === 89548
		 || 	event.item === 89552
		 || 	event.item === 89564
		 || 	event.item === 89572
		 || 	event.item === 89580
		 || 	event.item === 89588
		 || 	event.item === 89592
		 || 	event.item === 89604
		 || 	event.item === 89608
		 )
		 
		sendMessage(header+'(<font color="#fff317">Weapon </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	*/
	
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
	/*
	else if (	event.item === 89613
		 ||  	event.item === 89617 
		 || 	event.item === 89621
		 || 	event.item === 89625
		 || 	event.item === 89633
		 )
	
		sendMessage(header+'(<font color="#ffffff">Armor </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	*/
	
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
	/*
	else if(	event.item === 89614
		 || 	event.item === 89618
		 || 	event.item === 89622
		 || 	event.item === 89626
		 || 	event.item === 89634
		 )
		 
		sendMessage(header+'(<font color="#00ff00">Armor </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	*/
	
	// Armor Gold lvl 69 Hauberk / Cuirass / Robe
	//1*3
	
	else if(	event.item === 89615	)
	{	 
		sendMessage(header+'(<font color="#7070ff">Annihilation Hauberk </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89619	)
	{	 
		sendMessage(header+'(<font color="#7070ff">Dark Light Hauberk </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89623	)
	{ 
		sendMessage(header+'(<font color="#7070ff">Annihilation Cuirass </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89627	)
	{ 
		sendMessage(header+'(<font color="#7070ff">Dark Light Cuirass </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89635	)
	{ 
		sendMessage(header+'(<font color="#7070ff">Dark Light Robe </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	/*
	else if(	event.item === 89615
		 || 	event.item === 89619
		 || 	event.item === 89623
		 || 	event.item === 89627
		 || 	event.item === 89635
		 )
		 
		sendMessage(header+'(<font color="#7070ff">Armor </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	*/

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
	/*
	else if(	event.item === 89616 
		 || 	event.item === 89620
		 || 	event.item === 89624
		 || 	event.item === 89628
		 || 	event.item === 89636
		 )
		 
		sendMessage(header+'(<font color="#fff317">Armor </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	*/
	
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
	/*	
	else if (	event.item === 89637
		 || 	event.item === 89641
		 || 	event.item === 89645
		 || 	event.item === 89649
		 || 	event.item === 89657
		 )
	
		sendMessage(header+'(<font color="#ffffff">Hand </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	*/
	
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
	/*
	else if(	event.item === 89638
		 || 	event.item === 89642
		 || 	event.item === 89646
		 || 	event.item === 89650
		 || 	event.item === 89658
		 )
		 
		sendMessage(header+'(<font color="#00ff00">Hand </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	*/
	
	// Armor Gold lvl 69 Gauntlet / Gloves / Sleeves
	//1*3
	
	else if(	event.item === 89639	)
	{
		sendMessage(header+'(<font color="#7070ff">Annihilation Gauntlet </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89643	)
	{
		sendMessage(header+'(<font color="#7070ff">Dark Light Gauntlet </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89647	)
	{
		sendMessage(header+'(<font color="#7070ff">Annihilation Gloves </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89651	)
	{
		sendMessage(header+'(<font color="#7070ff">Dark Light Gloves </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89659	)
	{
		sendMessage(header+'(<font color="#7070ff">Dark Light Sleeves </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	/*
	else if(	event.item === 89639
		 || 	event.item === 89643
		 || 	event.item === 89647
		 || 	event.item === 89651
		 || 	event.item === 89659
		 )
		 
		sendMessage(header+'(<font color="#7070ff">Hand </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	*/
	
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
	/*
	else if(	event.item === 89640
		 || 	event.item === 89644
		 || 	event.item === 89648
		 || 	event.item === 89652
		 || 	event.item === 89660
		 )
		 
		sendMessage(header+'(<font color="#fff317">Hand </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	*/
	
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
	/*
	else if (	event.item === 89661
		 || 	event.item === 89665
		 || 	event.item === 89669
		 || 	event.item === 89673
		 || 	event.item === 89681
		 )
	
		sendMessage(header+'(<font color="#ffffff">Foot </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	*/
	
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
	/*
	else if(	event.item === 89662
		 || 	event.item === 89666
		 || 	event.item === 89670
		 || 	event.item === 89674
		 || 	event.item === 89682
		 )
		 
		sendMessage(header+'(<font color="#00ff00">Foot </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	*/
	
	// Armor Gold lvl 69 Greaves / Boots / Shoes
	//1*3

	else if(	event.item === 89663	)
	{
		sendMessage(header+'(<font color="#7070ff">Annihilation Greaves </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89667	)
	{
		sendMessage(header+'(<font color="#7070ff">Dark Light Greaves </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89671	)
	{
		sendMessage(header+'(<font color="#7070ff">Annihilation Boots </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89675	)
	{
		sendMessage(header+'(<font color="#7070ff">Dark Light Boots </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 89683	)
	{
		sendMessage(header+'(<font color="#7070ff">Dark Light Shoes </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	/*
	else if(	event.item === 89663
		 || 	event.item === 89667
		 || 	event.item === 89671
		 || 	event.item === 89675
		 || 	event.item === 89683
		 )
		 
		sendMessage(header+'(<font color="#7070ff">Foot </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	*/
	
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
	/*
	else if(	event.item === 89664
		 || 	event.item === 89668
		 || 	event.item === 89672
		 || 	event.item === 89676
		 || 	event.item === 89684
		 )
		 
		sendMessage(header+'(<font color="#fff317">Foot </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	*/
	
	// Armor Gold lvl 69 Greaves / Boots / Shoes
	//1*5
	
	else if(	event.item === 89677 || event.item === 89678 || event.item === 89679 || event.item === 89680	)
	{
		sendMessage(header+'<font color="#b5aaaa">(Trash Item Delete It)</font>', cchat)
	}
	// Brooch
	//1*1
	
	else if (	event.item === 88875	)
	{
		sendMessage(header+'(<font color="#ffffff">Annihilation Brooch </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	else if (	event.item === 88879	)
	{
		sendMessage(header+'(<font color="#ffffff">Dark Light Brooch </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	}
	/*
	else if (	event.item === 88875
		 ||  	event.item === 88879 
		 )
	
		sendMessage(header+'(<font color="#ffffff">Brooch </font>'+'<font color="#ff0000">0</font>'+'<font color="#ffffff"> Effect</font>)', cchat)
	*/
	
	//1*2
	
	else if(	event.item === 88876	)
	{
		sendMessage(header+'(<font color="#00ff00">Annihilation Brooch </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	else if(	event.item === 88880	)
	{
		sendMessage(header+'(<font color="#00ff00">Dark Light Brooch </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	}
	/*
	else if(	event.item === 88876
		 || 	event.item === 88880
		 )
		 
		sendMessage(header+'(<font color="#00ff00">Brooch </font>'+'<font color="#ff0000">1</font>'+'<font color="#00ff00"> Effect</font>)', cchat)
	*/
	
	//1*3
	
	else if(	event.item === 88877	)
	{
		sendMessage(header+'(<font color="#7070ff">Annihilation Brooch </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	else if(	event.item === 88881	)
	{
		sendMessage(header+'(<font color="#7070ff">Dark Light Brooch </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	}
	/*
	else if(	event.item === 88877
		 || 	event.item === 88881
		 )
		 
		sendMessage(header+'(<font color="#7070ff">Brooch </font>'+'<font color="#ff0000">2</font>'+'<font color="#7070ff"> Effect</font>)', cchat)
	*/
	
	//1*4
	
	else if(	event.item === 88878	)
	{
		sendMessage(header+'(<font color="#fff317">Annihilation Brooch </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	else if(	event.item === 88882	)
	{
		sendMessage(header+'(<font color="#fff317">Dark Light Brooch </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	}
	/*
	else if(	event.item === 88878
		 || 	event.item === 88882
		 )
		 
		sendMessage(header+'(<font color="#fff317">Brooch </font>'+'<font color="#ff0000">3</font>'+'<font color="#fff317"> Effect</font>)', cchat)
	*/
	
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
	// Box Zenobia
	else if(	event.item === 206960	)
	{
		sendMessage(header+'(<font color="#ff1797">Zenobia Box</font>)', cchat)
		notice('(Zenobia Box)')
	}
	// Box Gear&Mats
	else if(	event.item === 206951
		 || 	event.item === 206952
		 || 	event.item === 206953
		 || 	event.item === 206954
		 || 	event.item === 90923
		 || 	event.item === 98780	)
	{
		sendMessage(header+'(<font color="#fff317">Gear & Mats Box</font>)', cchat)
	}
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
	// Half Map
	else if(	event.item === 206855
		 || 	event.item === 206869
		 || 	event.item === 206856
		 || 	event.item === 206870	)
	{
		sendMessage(header+'(<font color="#00ff00">Half Map</font>)', cchat)
	}
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
	// Card Green	
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
	// Event Item
	else if(	event.item === 155003	)
	{
		sendMessage(header+'(<font color="#00ff00">Unique Seashell I</font>)', cchat)
		notice('(Unique Seashell I)')
	}
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
	
	//Option Change Scroll(Blue)
	//[Weapon]
	else if(	event.item === 204503	)
	{
		sendMessage(header+'(<font color="#7070ff">Option Change Scroll </font>'+'<font color="#7070ff">[Weapon]</font>)', cchat)
	}
	//[Armor]
	else if(	event.item === 204504	)
	{
		sendMessage(header+'(<font color="#7070ff">Option Change Scroll </font>'+'<font color="#7070ff">[Armor]</font>)', cchat)
	}
	//[Hand Armor]
	else if(	event.item === 204505	)
	{
		sendMessage(header+'(<font color="#7070ff">Option Change Scroll </font>'+'<font color="#7070ff">[Hand Armor]</font>)', cchat)
	}
	//[Foot Armor]
	else if(	event.item === 204506	)
	{
		sendMessage(header+'(<font color="#7070ff">Option Change Scroll </font>'+'<font color="#7070ff">[Foot Armor]</font>)', cchat)
	}
	//[Belt]
	else if(	event.item === 204507	)
	{
		sendMessage(header+'(<font color="#7070ff">Option Change Scroll </font>'+'<font color="#7070ff">[Belt]</font>)', cchat)
	}
	//[Mask]
	else if(	event.item === 204508	)
	{
		sendMessage(header+'(<font color="#7070ff">Option Change Scroll </font>'+'<font color="#7070ff">[Mask]</font>)', cchat)
	}
	//[Brooch]
	else if(	event.item === 204509	)
	{
		sendMessage(header+'(<font color="#7070ff">Option Change Scroll </font>'+'<font color="#7070ff">[Brooch]</font>)', cchat)
	}
	//[Ring]
	else if(	event.item === 204510	)
	{
		sendMessage(header+'(<font color="#7070ff">Option Change Scroll </font>'+'<font color="#7070ff">[Ring]</font>)', cchat)
	}
	//[Necklace]
	else if(	event.item === 204511	)
	{
		sendMessage(header+'(<font color="#7070ff">Option Change Scroll </font>'+'<font color="#7070ff">[Necklace]</font>)', cchat)
	}
	//[Earrings]
	else if(	event.item === 204512	)
	{
		sendMessage(header+'(<font color="#7070ff">Option Change Scroll </font>'+'<font color="#7070ff">[Earrings]</font>)', cchat)
	}
	//[Circlet]
	else if(	event.item === 204513	)
	{
		sendMessage(header+'(<font color="#7070ff">Option Change Scroll </font>'+'<font color="#7070ff">[Circlet]</font>)', cchat)
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
	
	//Brooch Etching
	// I
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
		sendMessage(header+'(<font color="#7070ff">Brooch Etching </font>'+'<font color="#7070ff">Pumped III</font>)', cchat)
	}
	else if(	event.item === 6968		)
	{
		sendMessage(header+'(<font color="#7070ff">Brooch Etching </font>'+'<font color="#7070ff">Keen III</font>)', cchat)
	}
	else if(	event.item === 6969		)
	{
		sendMessage(header+'(<font color="#7070ff">Brooch Etching </font>'+'<font color="#7070ff">Swift III [RIP]</font>)', cchat)
	}
	else if(	event.item === 6970 	)
	{
		sendMessage(header+'(<font color="#7070ff">Brooch Etching </font>'+'<font color="#7070ff">Relentless Pumped III</font>)', cchat)
	}
	else if(	event.item === 6971		)
	{
		sendMessage(header+'(<font color="#7070ff">Brooch Etching </font>'+'<font color="#7070ff">Relentless Keen III</font>)', cchat)
	}
	else if(	event.item === 6972		)
	{
		sendMessage(header+'(<font color="#7070ff">Brooch Etching </font>'+'<font color="#7070ff">Relentless Swift III [RIP]</font>)', cchat)
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
	
	// Partner : RK-9 (Rare)
	else if(	event.item === 6967 	)
	{
		sendMessage(header+'(<font color="#7070ff">Partner : RK-9 </font>'+'<font color="#7070ff">(Rare)</font>)', cchat)
	}
	
	// Partner : RK-9 (Superior)
	else if(	event.item === 6978		)
	{
		sendMessage(header+'(<font color="#fff317">Partner : RK-9 </font>'+'<font color="#fff317">(Superior)</font>)', cchat)
		notice('Partner : RK-9 (Superior)')
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
			d.send('S_CHAT', 3 , {
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
