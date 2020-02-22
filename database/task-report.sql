-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema task-report
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema task-report
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `task-report` DEFAULT CHARACTER SET utf8 ;
USE `task-report` ;

-- -----------------------------------------------------
-- Table `task-report`.`task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task-report`.`task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `card_url` VARCHAR(255) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `task-report`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task-report`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = '		';


-- -----------------------------------------------------
-- Table `task-report`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task-report`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `login` VARCHAR(45) NOT NULL,
  `password` VARCHAR(150) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  `role_id` INT NOT NULL,
  `email` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_role_idx` (`role_id` ASC) VISIBLE,
  UNIQUE INDEX `login_UNIQUE` (`login` ASC) VISIBLE,
  CONSTRAINT `fk_user_role`
    FOREIGN KEY (`role_id`)
    REFERENCES `task-report`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `task-report`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task-report`.`project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `task-report`.`user_task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task-report`.`user_task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `task_id` INT NOT NULL,
  INDEX `fk_user_has_task_task1_idx` (`task_id` ASC) VISIBLE,
  INDEX `fk_user_has_task_user1_idx` (`user_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_user_has_task_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `task-report`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_task_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `task-report`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `task-report`.`task_project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task-report`.`task_project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `task_id` INT NOT NULL,
  `project_id` INT NOT NULL,
  INDEX `fk_task_has_project_project1_idx` (`project_id` ASC) VISIBLE,
  INDEX `fk_task_has_project_task1_idx` (`task_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_task_has_project_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `task-report`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_task_has_project_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `task-report`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `task-report`.`tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task-report`.`tag` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `task-report`.`task_tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task-report`.`task_tag` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `task_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  INDEX `fk_task_has_tag_tag1_idx` (`tag_id` ASC) VISIBLE,
  INDEX `fk_task_has_tag_task1_idx` (`task_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_task_has_tag_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `task-report`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_task_has_tag_tag1`
    FOREIGN KEY (`tag_id`)
    REFERENCES `task-report`.`tag` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `task-report`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task-report`.`status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `task-report`.`task_status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task-report`.`task_status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `task_id` INT NOT NULL,
  `status_id` INT NOT NULL,
  INDEX `fk_task_has_status_status1_idx` (`status_id` ASC) VISIBLE,
  INDEX `fk_task_has_status_task1_idx` (`task_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_task_has_status_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `task-report`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_task_has_status_status1`
    FOREIGN KEY (`status_id`)
    REFERENCES `task-report`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `task-report`.`commentary`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task-report`.`commentary` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `commentary` TEXT NOT NULL,
  `task_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_commentary_task_idx` (`task_id` ASC) VISIBLE,
  INDEX `fk_commentary_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_commentary_task`
    FOREIGN KEY (`task_id`)
    REFERENCES `task-report`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_commentary_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `task-report`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `task-report`.`commit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task-report`.`commit` (
  `id` INT NOT NULL,
  `commit_url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `task-report`.`task_commit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `task-report`.`task_commit` (
  `id` INT NOT NULL,
  `commit_id` INT NOT NULL,
  `task_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_task_commit_task_idx` (`task_id` ASC) VISIBLE,
  INDEX `fk_task_commit_commit_idx` (`commit_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_commit_task`
    FOREIGN KEY (`task_id`)
    REFERENCES `task-report`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_task_commit_commit`
    FOREIGN KEY (`commit_id`)
    REFERENCES `task-report`.`commit` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
