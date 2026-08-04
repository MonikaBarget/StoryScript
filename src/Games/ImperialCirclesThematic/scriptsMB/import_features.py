# Script to iterature through all HTML files in locations and import missing features

## This is a script to speed up the process of adding features mentioned in HTML files to their corresponding TS files.
## The script first searches the HTML location files to find all feature names. 
## The feature names per file are then written to a temporary list, and finally converted into valid file names and function names. 

## NOTE that this script only works if the feature names exactly match the function AND file names!

# Import Pythong libraries
import os
import re
from pathlib import Path

# Directory containing the .ts and .html files
LOCATIONS_DIR = Path("../locations")

# Operations for individual HTML and TS files

def extract_features_from_html(html_file: Path) -> set:
    with open(html_file, "r", encoding="utf-8") as f:
        content = f.read()
    # Find all <feature name="..."> tags
    features = set(re.findall(r'<feature name="([^"]+)">', content))
    return features

def update_ts_imports(ts_file: Path, features: set):
    """Update a .ts file to add imports for the given features."""
    with open(ts_file, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract existing imports
    import_section_end = content.find("\n\nexport function")
    if import_section_end == -1:
        import_section_end = content.find("\nexport function")

    if import_section_end == -1:
        print(f"Could not find import section in {ts_file}")
        return

    # Generate new imports for features

    ## TO DO MONIKA: CHANGE THIS FOR DYNAMIC UPDATES! NO MAPPING NEEDED!

    new_imports = []
    for feature in features:
        if feature in FEATURE_IMPORT_MAP:
            import_path = FEATURE_IMPORT_MAP[feature]
            new_imports.append(f"import {{ {feature} }} from '{import_path}';")

    # Add new imports if they don't already exist
    existing_imports = content[:import_section_end]
    for new_import in new_imports:
        if new_import not in existing_imports:
            existing_imports += new_import + "\n"

    # Reconstruct the file content
    updated_content = existing_imports + content[import_section_end:]

    # Write the updated content back to the file
    with open(ts_file, "w", encoding="utf-8") as f:
        f.write(updated_content)

# Main function for iteration over files

def main():
    for html_file in LOCATIONS_DIR.glob("*.html"):
        # Find the corresponding .ts file
        ts_file = html_file.with_suffix(".ts")
        if not ts_file.exists():
            print(f"No corresponding .ts file for {html_file}")
            continue

        # Extract features from the HTML file
        features = extract_features_from_html(html_file)
        if not features:
            continue

        print(f"🔍 Found features in {html_file}: {features}")
        update_ts_imports(ts_file, features)
        print(f"Updated imports in {ts_file}")

if __name__ == "__main__":
    main()