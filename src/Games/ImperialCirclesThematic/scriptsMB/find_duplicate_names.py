# Find duplicate location names
# Run python find_duplicate_names.py in command line

# Import packages

import os
import re
from collections import defaultdict

# Directory to scan
LOCATIONS_DIR = os.path.join(os.path.dirname(__file__), "../locations")

# Regex to match Location({ ... name: '...' ... })
LOCATION_PATTERN = re.compile(
    r"Location\s*\(\s*{[^}]*name\s*:\s*['\"]([^'\"]+)['\"][^}]*}\s*\)",
    re.DOTALL
)

# Regex to match name: '...' or name: "..."
NAME_PATTERN = re.compile(r"name\s*:\s*['\"]([^'\"]+)['\"]")

def find_duplicate_location_names():
    # Dictionary to store name -> list of (filepath, line_number)
    name_occurrences = defaultdict(list)

    # Walk through the locations directory
    for root, _, files in os.walk(LOCATIONS_DIR):
        for file in files:
            if file.endswith(".ts"):
                filepath = os.path.join(root, file)
                with open(filepath, "r", encoding="utf-8") as f:
                    for line_number, line in enumerate(f, 1):
                        # Check if the line contains a Location object
                        location_match = LOCATION_PATTERN.search(line)
                        if location_match:
                            name_match = NAME_PATTERN.search(line)
                            if name_match:
                                name = name_match.group(1)
                                name_occurrences[name].append((filepath, line_number))

    # Filter for duplicates (names that appear more than once)
    duplicates = {
        name: occurrences
        for name, occurrences in name_occurrences.items()
        if len(occurrences) > 1
    }

    # Print results
    if not duplicates:
        print("No duplicate location names found.")
    else:
        print("Duplicate location names:")
        for name, occurrences in duplicates.items():
            print(f"\nName: {name}")
            for filepath, line_number in occurrences:
                print(f"  - {filepath}:{line_number}")

if __name__ == "__main__":
    find_duplicate_location_names()