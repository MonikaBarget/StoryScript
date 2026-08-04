for i in {1..10}; do
  cat > "place$i.html" <<EOF
<description name="Place$i">TEXT<description>
EOF
done