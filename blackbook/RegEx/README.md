# Regular Expression

regex is a pattern-matching language

system tools with regex:

- grep
- sed
- perl
- vim
- less
- javascript:
  - str.split(re)
  - str.match(re)
  - str.replace(re, 
  - re.tst(str) 
  - re.exec(str)

## When to escape metacharacters

In some engines, you need to escape metacharacters such as `+` and `?`. In others, you don't. In javascript and perl, you generally don't need to escape metacharacters. To use sed and grep in a similar way, use:

  - `sed -r`
  - `grep -E`

## Main things to know about regex

- `.` - matches any character
- `?` - zero or one time
- `*` - zero or more times
- `+` - one or more times

- `[]`- character class
- `^` - anchor at the beginning 
- `$` - anchor at the end

- `(a|b)` - match a or b 
- `()` - capture group
- `(?:)` - non capture group

- `\d` - digit `[0-9]`
- `\w` - word `[A-Za-z0-9_]`
- `\s` - whitespace `[ \t\r\n\f ]`

## character classes

Also work with _ or spaces, and ranges.

- `[...]` - e.g. sed -E 's/d[ao]DA/g'
- `[ ... ]+` - matches one of more instances of the things inside character class.

## Great Resource for RegEx, already installed on your Machine.

- `perldoc perlreref` - Is universally installed on Linux and Unix
