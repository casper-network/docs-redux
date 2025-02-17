#!/bin/bash
for filename in ./condor/jsonrpc-comp/rpc-1.5/*.json; do
  echo $filename
  echo "\`\`\`json copy " > $filename.md
  cat $filename >> $filename.md
  echo " " >> $filename.md
  echo "\`\`\` " >> $filename.md
done

for filename in ./condor/jsonrpc-comp/rpc-2.0/*.json; do
  echo $filename
  echo "\`\`\`json copy " > $filename.md
  cat $filename >> $filename.md
  echo " " >> $filename.md
  echo "\`\`\` " >> $filename.md
done
for filename in ./condor/jsonrpc-comp/rpc-1.5/schema/*.json; do
  echo $filename
  echo "\`\`\`json copy " > $filename.md
  cat $filename >> $filename.md
  echo " " >> $filename.md
  echo "\`\`\` " >> $filename.md
done

for filename in ./condor/jsonrpc-comp/rpc-2.0/schema/*.json; do
  echo $filename
  echo "\`\`\`json copy " > $filename.md
  cat $filename >> $filename.md
  echo " " >> $filename.md
  echo "\`\`\` " >> $filename.md
done

exit

find ./condor/jsonrpc-comp/rpc-1.5/*.json -type f -print0 | while IFS= read -r -d $'\0' file; do
  echo $file
done


find ./condor/json-rpc-comp/rpc-1.5/*.json -type f -print0 | while IFS= read -r -d $'\0' file; do

  echo "\`\`\`json copy \n"
  echo $file
  echo "\n\`\`\` "

done

