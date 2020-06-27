/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

// my answer:
let pound = "";
for (let counter = 0; counter < 7; counter++) {
  pound = pound+"#";
  console.log(pound);
}




// book answer:
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
