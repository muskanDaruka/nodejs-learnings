express is a framework that use http.create to create server internally
to create rest api we use express

## Difference Between HTTP and REST
                HTTP	                                                                                                  REST
HTTP stands for HyperText Transfer Protocol.	                                                    REST stands for Representational StateTransfer.
It is a communication protocol.	                                                                    It is an architectural style for designingAPIs.
It defines how data is transferred over the internet.	                                            It defines how APIs should be structured.
It provides methods like GET, POST, PUT, PATCH, DELETE.	                             It uses those HTTP methods to perform operations on resources.
HTTP can be used for many things, such as loading web pages, downloading files, and calling APIs.	REST is specifically used for building webAPIs.

## Task
Nodejs fs module operations : create, read, delete, append -> sync and async
=> fs file is used for file system
create -> fs.writeFileSync -> after executing one than the another one will be excecuted | fs.writeFile -> here it uses callback and if the one excecution takes time it will move to another excecution and that time consuming excecution work will be done in background.
readFile -> fs.readFileSync | fs.readFile -> utf8 converts the file to readable string
append data -> fs.appendFileSync | fs.appendFile -> to add data at the end
Delete file -> fs.unlinkSync | fs.unlink -> by using this file get deleted
rename file -> fs.renameSync | fs.rename
check if file exists or not -> fs.existsSync -> output will be in true or false
create folder -> fs.mkdirSync | fs.mkdir
read folder -> fs.readdir
delete folder -> empty folder ->  fs.rmdir | folder with files -> fs.rm
get file info -> fs.stat
copy file -> fs.copyFile
update file -> fs.writeFileSync | fs.writeFile  

.json, .txt, array, jwt
todo create, get and delete

