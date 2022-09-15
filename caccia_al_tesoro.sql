
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

CREATE TABLE `paintingsInGame` (
    `idgame` int(5) NOT NULL,
    `idpainting` int(5) NOT NULL,
    `riddleorder` int(5) NOT NULL,
    PRIMARY KEY (`idgame`, `idpainting`),
    FOREIGN KEY (idgame) REFERENCES matches(id)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;

ALTER TABLE players
    ADD FOREIGN KEY (game) REFERENCES matches(id);

INSERT INTO `adminlogin`(`password`) VALUES ('leonardodavinci')

