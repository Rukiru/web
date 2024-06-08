#!/bin/sh

# 타입 목록
types=("feat" "fix" "docs" "style" "refactor" "perf" "test" "chore" "revert")

# 타입 선택
echo "Select commit type:"
select type in "${types[@]}"; do
  if [[ -n $type ]]; then
    break
  else
    echo "Invalid selection. Try again."
  fi
done

# 스코프 입력
read -p "Enter scope (e.g., login, api, etc.): " scope

# 커밋 메시지 입력
read -p "Enter commit message: " message

# 커밋 실행
git commit -m "$type($scope): $message"
