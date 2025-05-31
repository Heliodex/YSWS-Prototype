# Overwrites are needed to ensure that the schema is correct when changing in dev mode/on deployment

DEFINE TABLE OVERWRITE session SCHEMAFULL;
	DEFINE FIELD OVERWRITE created ON session TYPE datetime DEFAULT time::now();
	DEFINE FIELD OVERWRITE expires ON session TYPE datetime DEFAULT time::now() + 30d;

DEFINE TABLE OVERWRITE user SCHEMAFULL;
