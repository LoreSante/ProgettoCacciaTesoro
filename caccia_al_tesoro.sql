
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


CREATE TABLE `players` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nickname` text NOT NULL,
  `game` int(6) NOT NULL,
  `points` int(2) NOT NULL DEFAULT '0',
  `ishost` boolean NOT NULL DEFAULT FALSE,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

CREATE TABLE `paintings` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `author` text NOT NULL,
  `year` text NOT NULL,
  `technique` text NOT NULL,
  `position` text NOT NULL,
  `description` longtext NOT NULL,
  `url` text NOT NULL,
  `riddle` text NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

CREATE TABLE `matches` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `status` tinyint(4) NOT NULL DFAULT 0,
   PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

CREATE TABLE `adminLogin` (
  `password` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`password`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;

INSERT INTO `adminlogin`(`password`) VALUES ('leonardodavinci')

INSERT INTO `paintings`( `title`, `author`, `year`, `technique`, `position`, `description`, `url`) VALUES ('Gioconda','Leonardo Da Vinci','1503','Colore ad olio','Musée du Louvre','Opera iconica ed enigmatica della pittura mondiale, si tratta sicuramente del ritratto più celebre della storia nonché di una delle opere d''arte più note in assoluto. Il sorriso quasi impercettibile del soggetto, col suo alone di mistero, ha ispirato tantissime pagine di critica, letteratura, opere di immaginazione e persino studi psicoanalitici; sfuggente, ironica e sensuale, la Monna Lisa è stata di volta in volta amata e idolatrata, ma anche irrisa e vandalizzata.','https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1280px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg');
