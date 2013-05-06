Truncate.js is a tiny open source library for doing truncation on strings in your javascript.
Written and maintained by Dan Reed, 2013.

USAGE:
  * first, import this somewhere into your javascript... you should probably know how already or we are in trouble.
  * input your string and the maximum length into one of the three methods.
    * `truncateFront('banana', 5)` ====> '...na'
    * `truncateMiddle('banana', 5)` ====> 'b...a'
    * `truncateEnd('banana', 5)` ===> 'ba...'