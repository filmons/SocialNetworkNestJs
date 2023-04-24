-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 24 avr. 2023 à 13:56
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `nestagram`
--

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `authorID` int(11) NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `date` datetime NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`authorID`, `content`, `date`, `id`) VALUES
(2, 'Incroyable l\'album', '2023-02-10 09:27:26', 1),
(3, 'Je suis d\'accord, cet album est incroyable! J\'aime particulièrement la chanson \'Track 3\'. Quel est votre avis sur cette chanson ?', '2023-02-12 02:02:06', 2),
(4, 'Merci pour la recommandation, je vais écouter cet album dès que possible!', '2023-02-14 08:38:22', 3),
(1, 'Haha, j\'aime beaucoup ce titre.', '2023-03-25 11:27:23', 4),
(2, 'C\'est génial. J\'attends avec impatience la suite!', '2023-03-27 04:11:06', 5),
(3, 'Fouuuu', '2023-01-10 13:22:25', 6),
(4, 'Le style unique et la voix incroyable !', '2023-03-29 03:24:19', 7),
(1, 'T\'as l\'air super cool en soirée! Où as-tu trouvé cette tenue ?', '2023-03-13 02:12:46', 8),
(3, 'J\'aime beaucoup cette photo, t\'es un vrai fêtard!', '2023-03-15 21:19:47', 9),
(3, 'Ha ha je kif la version remixée', '2023-03-13 00:00:00', 10),
(4, 'Cette photo est incroyable, j\'aime beaucoup la façon dont elle capture l\'ambiance de la soirée.', '2023-03-15 09:33:11', 11),
(2, 'Quel est ton équipe préférée ?', '2023-03-28 00:00:00', 12),
(1, 'Je suis jaloux que t\'ai pu assister à ce match, ça a dû être incroyable!!!', '2023-03-30 06:10:09', 13),
(3, 'Salut! Comment ça va? Je trouve que cette photo est vraiment cool, on dirait que tu es en train de passer un bon moment.', '2023-04-01 11:17:30', 14),
(4, 'Hahaha sheeeesh', '2023-04-02 05:16:17', 15),
(2, 'J\'aime beaucoup la façon dont tu as utilisé les mots pour évoquer la sensation de vitesse et de liberté que l\'on ressent au volant. Bravo !', '2023-03-28 09:23:15', 16),
(1, 'Je suis un grand fan de haïkus, et celui-ci est vraiment excellent. Tu as réussi à capturer toute l\'essence de la conduite dans ces quelques mots. Merci pour ce partage !', '2023-04-01 00:00:00', 17),
(3, 'Ton poème est magnifique, j\'ai l\'impression d\'y être ! Tu as un véritable talent pour la poésie. Merci de nous faire voyager avec toi.', '2023-03-12 13:12:20', 18),
(4, 'Superbe design ! J\'adore les couleurs et la façon dont tout est agencé. Tu es vraiment doué pour ce genre de choses.', '2023-03-14 10:19:32', 19),
(1, '...', '2023-01-18 06:09:30', 20),
(2, 'Je suis d\'accord, il est temps d\'arrêter mdr', '2023-04-18 01:05:09', 21);

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `authorID` int(11) NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `meta_key` (`content`(191))
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `authorID`, `content`, `date`) VALUES
(1, 2, 'Incroyable l\'album', '2023-02-10 09:27:26'),
(2, 3, 'Je suis d\'accord, cet album est incroyable! J\'aime particulièrement la chanson \'Track 3\'. Quel est votre avis sur cette chanson ?', '2023-02-12 02:02:06'),
(3, 4, 'Merci pour la recommandation, je vais écouter cet album dès que possible!', '2023-02-14 08:38:22'),
(4, 1, 'Haha, j\'aime beaucoup ce titre.', '2023-03-25 11:27:23'),
(5, 2, 'C\'est génial. J\'attends avec impatience la suite!', '2023-03-27 04:11:06'),
(6, 3, 'Fouuuu', '2023-01-10 13:22:25'),
(7, 4, 'Le style unique et la voix incroyable !', '2023-03-29 03:24:19'),
(8, 1, 'T\'as l\'air super cool en soirée! Où as-tu trouvé cette tenue ?', '2023-03-13 02:12:46'),
(9, 3, 'J\'aime beaucoup cette photo, t\'es un vrai fêtard!', '2023-03-15 21:19:47'),
(10, 3, 'Ha ha je kif la version remixée', '2023-03-13 00:00:00'),
(11, 4, 'Cette photo est incroyable, j\'aime beaucoup la façon dont elle capture l\'ambiance de la soirée.', '2023-03-15 09:33:11'),
(12, 2, 'Quel est ton équipe préférée ?', '2023-03-28 00:00:00'),
(13, 1, 'Je suis jaloux que t\'ai pu assister à ce match, ça a dû être incroyable!!!', '2023-03-30 06:10:09'),
(14, 3, 'Salut! Comment ça va? Je trouve que cette photo est vraiment cool, on dirait que tu es en train de passer un bon moment.', '2023-04-01 11:17:30'),
(15, 4, 'Hahaha sheeeesh', '2023-04-02 05:16:17'),
(16, 2, 'J\'aime beaucoup la façon dont tu as utilisé les mots pour évoquer la sensation de vitesse et de liberté que l\'on ressent au volant. Bravo !', '2023-03-28 09:23:15'),
(17, 1, 'Je suis un grand fan de haïkus, et celui-ci est vraiment excellent. Tu as réussi à capturer toute l\'essence de la conduite dans ces quelques mots. Merci pour ce partage !', '2023-04-01 00:00:00'),
(18, 3, 'Ton poème est magnifique, j\'ai l\'impression d\'y être ! Tu as un véritable talent pour la poésie. Merci de nous faire voyager avec toi.', '2023-03-12 13:12:20'),
(19, 4, 'Superbe design ! J\'adore les couleurs et la façon dont tout est agencé. Tu es vraiment doué pour ce genre de choses.', '2023-03-14 10:19:32'),
(20, 1, '...', '2023-01-18 06:09:30'),
(21, 2, 'Je suis d\'accord, il est temps d\'arrêter mdr', '2023-04-18 01:05:09');

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `post_date` datetime NOT NULL,
  `post_author` int(11) NOT NULL,
  `post_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `post_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `post_status` varchar(255) NOT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `likedBy` varchar(255) DEFAULT NULL,
  `mediaSrc` varchar(255) DEFAULT NULL,
  `post_modified` datetime DEFAULT NULL,
  `post_type` varchar(255) NOT NULL,
  `id` int(11) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`post_date`, `post_author`, `post_title`, `post_content`, `post_status`, `comments`, `likedBy`, `mediaSrc`, `post_modified`, `post_type`, `id`) VALUES
('2023-02-07 16:17:16', 1, 'Introduction', 'Je ferais l\'impossible pour toi, pour moi je ferais même pas le possible (incrrr)', 'publish', '1,2,3', '2,3,4', 'https://i.ytimg.com/vi/BdRhbZjvdj8/maxresdefault.jpg', '2023-02-16 08:17:46', 'image', 1),
('2023-03-23 19:03:13', 3, 'Péon !!!', 'Waah', 'publish', '4,5', '1,4', 'https://pbs.twimg.com/media/FK2B5l-XIAQM1-9.jpg', '2023-03-23 19:37:15', 'image', 2),
('2023-01-07 03:58:58', 3, 'Train De Vies', 'Sheeeeeeesh le dernier son', 'publish', '6,7', '2,4', 'https://i.pinimg.com/736x/6e/84/c8/6e84c8af94ea9d6475ed92ea5bca0c91.jpg', '2023-03-26 05:24:22', 'image', 3),
('2023-03-11 11:04:55', 1, 'Me at the club', 'Moi en soirée', 'publish', '8,9', '2,3,4', 'https://pyxis.nymag.com/v1/imgs/258/ab8/b37c0379b29ab114b7c18e2bc11e89a5ec-the-weeknd-meme.2x.rsocial.w600.jpg', '2023-03-11 11:04:55', 'image', 4),
('2023-03-11 11:03:52', 2, 'Me at the club Remix', 'Lionel en soirée', 'publish', '10,11', '1,2,4', 'https://media1.popsugar-assets.com/files/thumbor/elTduQMgTYbHTi7N5M0uCXQYeAw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/02/07/154/n/1922283/tmp_EWcAT8_0f6a378377f275e7_giphy.gif', '2023-03-11 11:04:14', 'image', 5),
('2023-01-07 03:59:20', 4, 'Me at the match', 'Et oui', 'publish', '12,13', '1,2,3,4', 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1254x297:1256x295)/origin-imgresizer.eurosport.com/2022/12/15/3508908-71525328-2560-1440.jpg', '2023-03-26 05:02:40', 'image', 6),
('2023-03-30 00:04:07', 4, 'Hey', 'Salut tout le monde', 'publish', '14,15', '1,4', 'https://images7.memedroid.com/images/UPLOADED358/625c179c0cc7a.jpeg', '2023-03-30 00:04:07', 'image', 7),
('2023-01-07 03:59:20', 4, 'AMG Performance', 'Moteur rugissant, Sur l\'asphalte qui défile, La voiture s\'envole.', 'publish', '16,17', '1,2,3', 'https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/amg/amg-range/amg-gt/amg-gt-63-e-performance/_jcr_content/par/productinfotextimage/media2/slides/videoimageslide/image.MQ6.12.20210902130404.jpeg', '2023-03-26 23:44:45', 'image', 8),
('2023-03-11 14:30:24', 2, 'Poème sur le Mexique', 'Au pays du soleil, de la tequila et des sombreros Se dresse un paysage de couleurs et de chaleur, Le Mexique, terre de traditions et de passions Où chaque instant est une fête en ébullition.', 'publish', '18', '1,3,4', 'mexico.mp4', '2023-03-11 14:30:24', 'video', 9),
('2023-03-12 17:58:06', 2, 'David ', '', 'publish', '19', '1,2,4', 'https://image.spreadshirtmedia.net/image-server/v1/compositions/T1459A839PA4459PT28D185427088W8333H10000/views/1,width=378,height=378,appearanceId=839,backgroundColor=FFFFFF,noPt=true/michelangelo-japon-art-e-boy-e-girl-anime-otaku.jpg', '2023-03-12 17:58:06', 'image', 10),
('2023-01-18 16:39:11', 1, 'Brouillon auto', '', 'private', '20', '1', 'https://player.vimeo.com/external/422153599.sd.mp4...', '2023-02-16 08:14:29', 'video', 11),
('2023-03-11 11:04:23', 3, 'Vraaaiment', '2023 il s\'agirait d\'arrêter ça', 'publish', '21', '1,2,4', 'https://meme-internet.com/wp-content/uploads/2018/05/memeinternet-7178.jpg', '2023-03-11 11:04:48', 'image', 12);

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_date` datetime NOT NULL,
  `post_author` int(11) NOT NULL,
  `post_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `post_content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `post_status` varchar(255) NOT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `likedBy` varchar(255) DEFAULT NULL,
  `mediaSrc` varchar(255) DEFAULT NULL,
  `post_modified` datetime DEFAULT NULL,
  `post_type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=100 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `post_date`, `post_author`, `post_title`, `post_content`, `post_status`, `comments`, `likedBy`, `mediaSrc`, `post_modified`, `post_type`) VALUES
(1, '2023-02-07 16:17:16', 1, 'Introduction', 'Je ferais l\'impossible pour toi, pour moi je ferais même pas le possible (incrrr)', 'publish', '1,2,3', '2,3,4', 'https://i.ytimg.com/vi/BdRhbZjvdj8/maxresdefault.jpg', '2023-02-16 08:17:46', 'image'),
(2, '2023-03-23 19:03:13', 3, 'Péon !!!', 'Waah', 'publish', '4,5', '1,4', 'https://pbs.twimg.com/media/FK2B5l-XIAQM1-9.jpg', '2023-03-23 19:37:15', 'image'),
(3, '2023-01-07 03:58:58', 3, 'Train De Vies', 'Sheeeeeeesh le dernier son', 'publish', '6,7', '2,4', 'https://i.pinimg.com/736x/6e/84/c8/6e84c8af94ea9d6475ed92ea5bca0c91.jpg', '2023-03-26 05:24:22', 'image'),
(4, '2023-03-11 11:04:55', 1, 'Me at the club', 'Moi en soirée', 'publish', '8,9', '2,3,4', 'https://pyxis.nymag.com/v1/imgs/258/ab8/b37c0379b29ab114b7c18e2bc11e89a5ec-the-weeknd-meme.2x.rsocial.w600.jpg', '2023-03-11 11:04:55', 'image'),
(5, '2023-03-11 11:03:52', 2, 'Me at the club Remix', 'Lionel en soirée', 'publish', '10,11', '1,2,4', 'https://media0.giphy.com/media/vVEjKbAUFtZzFzjYbz/giphy.gif', '2023-03-11 11:04:14', 'image'),
(6, '2023-01-07 03:59:20', 4, 'Me at the match', 'Et oui', 'publish', '12,13', '1,2,3,4', 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1254x297:1256x295)/origin-imgresizer.eurosport.com/2022/12/15/3508908-71525328-2560-1440.jpg', '2023-03-26 05:02:40', 'image'),
(9, '2023-03-30 00:04:07', 4, 'Hey', 'Salut tout le monde', 'publish', '14,15', '1,4', 'https://images7.memedroid.com/images/UPLOADED358/625c179c0cc7a.jpeg', '2023-03-30 00:04:07', 'image'),
(8, '2023-01-07 03:59:20', 4, 'AMG Performance', 'Moteur rugissant, Sur l\'asphalte qui défile, La voiture s\'envole.', 'publish', '16,17', '1,2,3', 'https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/amg/amg-range/amg-gt/amg-gt-63-e-performance/_jcr_content/par/productinfotextimage/media2/slides/videoimageslide/image.MQ6.12.20210902130404.jpeg', '2023-03-26 23:44:45', 'image'),
(7, '2023-03-11 14:30:24', 2, 'Poème sur le Mexique', 'Au pays du soleil, de la tequila et des sombreros Se dresse un paysage de couleurs et de chaleur, Le Mexique, terre de traditions et de passions Où chaque instant est une fête en ébullition.', 'publish', '18', '1,3,4', 'mexico.mp4', '2023-03-11 14:30:24', 'video'),
(10, '2023-03-12 17:58:06', 2, 'David ', '', 'publish', '19', '1,2,4', 'https://image.spreadshirtmedia.net/image-server/v1/compositions/T1459A839PA4459PT28D185427088W8333H10000/views/1,width=378,height=378,appearanceId=839,backgroundColor=FFFFFF,noPt=true/michelangelo-japon-art-e-boy-e-girl-anime-otaku.jpg', '2023-03-12 17:58:06', 'image'),
(11, '2023-01-18 16:39:11', 1, 'Brouillon auto', '', 'private', '20', '1', 'https://player.vimeo.com/external/422153599.sd.mp4...', '2023-02-16 08:14:29', 'video'),
(12, '2023-03-11 11:04:23', 3, 'Vraaaiment', '2023 il s\'agirait d\'arrêter ça', 'publish', '21', '1,2,4', 'https://meme-internet.com/wp-content/uploads/2018/05/memeinternet-7178.jpg', '2023-03-11 11:04:48', 'image');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_login` varchar(255) NOT NULL,
  `user_pwd` varchar(255) NOT NULL,
  `user_pseudo` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `user_avatar` varchar(255) NOT NULL,
  `followers` varchar(255) NOT NULL,
  `following` varchar(255) NOT NULL,
  `certified` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `user_login`, `user_pwd`, `user_pseudo`, `user_email`, `first_name`, `last_name`, `description`, `user_avatar`, `followers`, `following`, `certified`) VALUES
(1, 'Lionel', '$P$JcRzM7.hFyPqo5gkrt3vLQ2UEeSWZ0', 'LionelN', 'lionel.ngolo@gmail.com', 'Lionel', 'Ngolo', 'Direction la direction !', 'https://i.pinimg.com/originals/6e/0e/08/6e0e08d71047f6279ac4c38fd1316436.png', '2,3,4', '2,3,4', 0),
(2, 'Filmon', '$P$R2sZcJ.pKgXmvy4olYh9fIaQ6wbuT78', 'FilmonS', 'filmon.seare@gmail.com', 'Filmon', 'Seare', 'Best 2k23 Dev - Forbes', 'https://1000logos.net/wp-content/uploads/2017/03/LINUX-LOGO.png', '1,2,3', '1,3,4', 0),
(3, 'Ikram', '$P$E6nJfO.rLpSkx7dHmTtYV8zGKu0A35', 'AbdaLaTortue', 'ikram.mbechezi@gmail.com', 'Ikram', 'Mbechezi', 'Hey, je vous ai dit quoi ?', 'https://www.goutemesdisques.com/uploads/tx_gmdchron/pi1/z_01.jpg', '1,2,4', '1,2,4', 0),
(4, 'Ben', '$P$T1aHuI.gKjXcNz5lOyFvM9qdWbZr7e2', 'neBLaMontagne', 'ben.meite@gmail.com', 'Ben', 'Meite', 'Il n\'y a que les montagnes qui ne se rencontrent p...', 'https://thumbs.gfycat.com/AchingFormalGannet-max-1mb.gif', '1,2', '1,2,3', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
