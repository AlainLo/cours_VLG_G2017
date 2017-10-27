-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Ven 27 Octobre 2017 à 14:21
-- Version du serveur :  10.1.13-MariaDB
-- Version de PHP :  5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `tchat`
--

-- --------------------------------------------------------

--
-- Structure de la table `dialogue`
--

CREATE TABLE `dialogue` (
  `id_dialogue` int(11) NOT NULL,
  `id_membre` int(3) NOT NULL,
  `message` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `dialogue`
--

INSERT INTO `dialogue` (`id_dialogue`, `id_membre`, `message`, `date`) VALUES
(1, 1, 'tyjtyjtyjtyjyj:o', '2017-10-27 12:56:47'),
(2, 1, 'trjytyjtyjtj:p', '2017-10-27 12:56:54'),
(3, 1, 'tyjtyjtyjt :|', '2017-10-27 12:57:09');

-- --------------------------------------------------------

--
-- Structure de la table `membre`
--

CREATE TABLE `membre` (
  `id_membre` int(3) NOT NULL,
  `pseudo` varchar(60) NOT NULL,
  `civilite` enum('m','f') NOT NULL,
  `ville` varchar(50) NOT NULL,
  `date_de_naissance` date NOT NULL,
  `ip` varchar(15) NOT NULL,
  `date_connexion` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `membre`
--

INSERT INTO `membre` (`id_membre`, `pseudo`, `civilite`, `ville`, `date_de_naissance`, `ip`, `date_connexion`) VALUES
(1, 'greg', 'm', 'gmbais', '0000-00-00', '::1', '1509101829');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `dialogue`
--
ALTER TABLE `dialogue`
  ADD PRIMARY KEY (`id_dialogue`);

--
-- Index pour la table `membre`
--
ALTER TABLE `membre`
  ADD PRIMARY KEY (`id_membre`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `dialogue`
--
ALTER TABLE `dialogue`
  MODIFY `id_dialogue` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `membre`
--
ALTER TABLE `membre`
  MODIFY `id_membre` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;