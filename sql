SELECT ID,NAME,(SELECT NAME FROM test where ID = t.PARENT) PARENT FROM `test` as t