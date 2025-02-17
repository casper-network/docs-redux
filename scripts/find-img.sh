image_folder=./cspr-docs/static/image;
docs_folder=./cspr-docs/docs;
image_count=0
image_names=()
images_list=./images_list.csv
images_notused=./images_notused.csv
images_grep=./images_grep_out.csv

echo "" > $images_list
echo "" > $images_notused
echo "" > $images_grep
for entry in $(find $image_folder -iname "*.jpeg" -o -iname "*.jpg" -o -iname "*.gif" -o -iname "*.png" -o -iname "*.bmp")
do
    # extract just the filename
    filename="${entry##*/}"
    printf "$entry\n" >> $images_list
    image_names[$image_count]=$filename
    image_count=$((image_count+1))
done

for image_name in ${image_names[@]}; do
    grep_result=$(grep -r -i "$image_name" $docs_folder);

    if [ -z "$grep_result" ];
    then
        printf "$image_name\n" >> $images_notused
    else
        printf "$grep_result\n" >> $images_grep
    fi
done