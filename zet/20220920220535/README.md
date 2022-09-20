# What is pipefail in bash?

The return status of a pipeline is the exit status of the last command,
unless the pipefail option is enabled. If pipefail is enabled, the
pipeline's return status is the value of the last (rightmost) command to
exit with a non-zero status, or zero if all commands exit successfully. 

Related:
 - man bash -> search pipefail

      #Unix #Linux #bash #pipefail
