rm ../../packages/read-and-play.h5p
zip -r -X -D ../../packages/read-and-play.h5p H5P.ReadAndPlay content h5p.json --exclude \*.ts\* --exclude \*.scss\* --exclude \node_modules\* --exclude **\node_modules\* --exclude \*.sh\* --exclude **\*.yml\* --exclude **\*.rb\* --exclude **\LICENSE
