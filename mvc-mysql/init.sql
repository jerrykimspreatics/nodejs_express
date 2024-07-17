CREATE TABLE visitor (
  id INT NOT NULL PRIMARY KEY auto_increment,
  name VARCHAR(10) NOT NULL,
  comment MEDIUMTEXT
);

INSERT INTO visitor (name, comment) VALUES("홍길동", "내가 왔다.");
INSERT INTO visitor (name, comment) VALUES("이찬혁", "으라차차");

select * from visitor;

select * from mysql.user;
drop user 'user'@'%';

-- user 생성
create user 'user'@'localhost' identified by '1234';
-- user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
grant all privileges on *.* to 'user'@'localhost' with grant option;
-- 현재 사용중인 MySQL 캐시 지우고 새로운 설정 적용
flush privileges;

-- MySQL 비번 변경하고 싶다면? (mysql 모듈 사용시, 아래 sql문으로 비밀번호의 플러그인을 
-- caching_sha2_password 에서 mysql_native_password 로 다운시켜주는 것)
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'pw54321';