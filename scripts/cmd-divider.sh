#!/usr/bin/env sh

cmd_divider() {
  local term_width=$(tput cols)
  local line_of_equals=$(printf "%${term_width}s" | tr ' ' '=')
  echo "\33[90m$line_of_equals\033[0m"
}