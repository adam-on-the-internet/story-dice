
function pick_image(roll) {
		switch(roll)
		{
			case 0:
				alt = 'dice';
				break;
			case 1:
				alt = 'alien';
				break;
			case 2:
				alt = 'angel';
				break;
			case 3:
				alt = 'animal';
				break;
			case 4:
				alt = 'archer';
				break;
			case 5:
				alt = 'award';
				break;
			case 6:
				alt = 'axe';
				break;
			case 7:
				alt = 'baby';
				break;
			case 8:
				alt = 'bag';
				break;
			case 9:
				alt = 'balance';
				break;
			case 10:
				alt = 'battle';
				break;
			case 11:
				alt = 'bell';
				break;
			case 12:
				alt = 'bird';
				break;
			case 13:
				alt = 'boat';
				break;
			case 13:
				alt = 'bomb';
				break;
			case 14:
				alt = 'book';
				break;
			case 15:
				alt = 'bug';
				break;
			case 16:
				alt = 'burglar';
				break;
			case 17:
				alt = 'camp';
				break;
			case 18:
				alt = 'cards';
				break;
			case 19:
				alt = 'camp';
				break;
			case 20:
				alt = 'cards';
				break;
			case 21:
				alt = 'cat';
				break;
			case 22:
				alt = 'chain';
				break;
			case 23:
				alt = 'chef';
				break;
			case 24:
				alt = 'chest';
				break;
			case 25:
				alt = 'colosseumj';
				break;
			case 26:
				alt = 'dance';
				break;
			case 27:
				alt = 'death';
				break;
			case 28:
				alt = 'dig';
				break;
			case 29:
				alt = 'discovery';
				break;
			case 30:
				alt = 'disguise';
				break;
			case 31:
				alt = 'dislike';
				break;
			case 32:
				alt = 'door';
				break;
			case 33:
				alt = 'drama';
				break;
			case 34:
				alt = 'drunk';
				break;
			case 35:
				alt = 'federal';
				break;
			case 36:
				alt = 'flag';
				break;
			case 37:
				alt = 'freedom';
				break;
			case 38:
				alt = 'adventure';
				break;
			case 39:
				alt = 'garden';
				break;
			case 40:
				alt = 'ghost';
				break;
			case 41:
				alt = 'gift';
				break;
			case 42:
				alt = 'grave';
				break;
			case 43:
				alt = 'healer';
				break;
			case 44:
				alt = 'heartbreak';
				break;
			case 45:
				alt = 'horror';
				break;
			case 46:
				alt = 'idea';
				break;
			case 47:
				alt = 'illness';
				break;
			case 48:
				alt = 'info';
				break;
			case 49:
				alt = 'invisible';
				break;
			case 50:
				alt = 'item';
				break;
			case 51:
				alt = 'key';
				break;
			case 52:
				alt = 'knight';
				break;
			case 53:
				alt = 'ladder';
				break;
			case 54:
				alt = 'like';
				break;
			case 55:
				alt = 'locked';
				break;
			case 56:
				alt = 'love';
				break;
			case 57:
				alt = 'magic';
				break;
			case 58:
				alt = 'mask';
				break;
			case 59:
				alt = 'message';
				break;
			case 60:
				alt = 'money';
				break;
			case 61:
				alt = 'monkey';
				break;
			case 62:
				alt = 'music';
				break;
			case 63:
				alt = 'mystery';
				break;
			case 64:
				alt = 'ninja';
				break;
			case 65:
				alt = 'oasis';
				break;				
			case 66:
				alt = 'paint';
				break;
			case 67:
				alt = 'pirate';
				break;
			case 68:
				alt = 'political';
				break;
			case 69:
				alt = 'potion';
				break;
			case 70:
				alt = 'power';
				break;
			case 71:
				alt = 'prediction';
				break;
			case 72:
				alt = 'puzzle';
				break;
			case 73:
				alt = 'pyramid';
				break;
			case 74:
				alt = 'questoin';
				break;
			case 75:
				alt = 'rest';
				break;
			case 76:
				alt = 'robot';
				break;
			case 77:
				alt = 'romance';
				break;
			case 78:
				alt = 'royalty';
				break;
			case 79:
				alt = 'see';
				break;
			case 80:
				alt = 'shield';
				break;
			case 81:
				alt = 'signal';
				break;
			case 82:
				alt = 'spell';
				break;
			case 83:
				alt = 'split';
				break;
			case 84:
				alt = 'storm';
				break;
			case 85:
				alt = 'strength';
				break;
			case 86:
				alt = 'time';
				break;
			case 87:
				alt = 'tracks';
				break;
			case 88:
				alt = 'village';
				break;
			case 89:
				alt = 'warrior';
				break;
			case 90:
				alt = 'weather';
				break;
			case 91:
				alt = 'wedding';
				break;
			case 92:
				alt = 'winds';
				break;
			case 93:
				alt = 'winter';
				break;
			case 94:
				alt = 'wish';
				break;
			case 95:
				alt = 'world';
				break;
			case 96:
				alt = 'shop';
				break;
			case 97:
				alt = 'beer';
				break;
			case 98:
				alt = 'cake';
				break;
			case 99:
				alt = 'cheese';
				break;
			default:
				alt = 'zombie';
		} 
		
		return alt;
}

function roll_dice(num) {
		// number between 1 and 100
		var one_roll = Math.floor((Math.random() * 100) + 1);
		var two_roll = 0;
		var three_roll = 0;
		
		if (num > 1)
		{
			while (two_roll == one_roll || two_roll == 0)
			{
				two_roll = Math.floor((Math.random() * 100) + 1);
			}
		}
		
		if (num > 2)
		{
			while (three_roll == one_roll || three_roll == two_roll || three_roll == 0)
			{
				three_roll = Math.floor((Math.random() * 100) + 1);
			}
		}
		
		var one_alt = pick_image(one_roll);
		var one_src = 'img/' + one_alt + '.png';
		
		document.getElementById("one").src = one_src; 	
		document.getElementById("one").alt = one_alt; 
				
		var two_alt = pick_image(two_roll);
		var two_src = 'img/' + two_alt + '.png';
		
		document.getElementById("two").src = two_src; 	
		document.getElementById("two").alt = two_alt; 
				
		var three_alt = pick_image(three_roll);
		var three_src = 'img/' + three_alt + '.png';
		
		document.getElementById("three").src = three_src; 	
		document.getElementById("three").alt = three_alt;
}