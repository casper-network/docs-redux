docs_folder=./cspr-docs/docs;
regex="\/image\/"
regex="import useBaseUrl from \'@docusaurus\/useBaseUrl\';"
grep -r -i "$regex" $docs_folder;

