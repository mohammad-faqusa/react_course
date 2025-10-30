import re
import os
import shutil
import zipfile

def title_to_filename(title):
    # Lowercase the title
    title = title.lower()
    # Remove all punctuation including periods and parentheses
    title = re.sub(r'[\"\'():\.]', '', title)
    # Replace spaces and slashes with hyphens
    title = re.sub(r'[\s/]+', '-', title)
    # Remove any remaining non-alphanumeric or non-hyphen characters
    title = re.sub(r'[^a-z0-9\-]', '', title)
    return title

def create_directory(newpath):
    if not os.path.exists(newpath):
        os.makedirs(newpath)

def create_file(newpath, filename):
    filepath = os.path.join(newpath, filename)
    if not os.path.exists(filepath):
        with open(filepath, "x") as f:
            pass  # Or write initial content if needed

import os

def append_line(file_path: str, line: str) -> None:
    os.makedirs(os.path.dirname(file_path), exist_ok=True)

    # open in append mode and write the line
    with open(file_path, "a", encoding="utf-8") as f:
        f.write(f"{line}\n")

def move_files(source_dir, target_dir):
    file_names = os.listdir(source_dir)
    for file_name in file_names:
        shutil.move(os.path.join(source_dir, file_name), target_dir)

def move_non_zip_files(source_dir, target_dir):
    if not os.path.isdir(source_dir):
        return
    for name in os.listdir(source_dir):
        src = os.path.join(source_dir, name)
        if os.path.isfile(src) and not name.lower().endswith('.zip'):
            shutil.move(src, target_dir)

def extract_number_prefix(title: str) -> str:
    # Try to capture leading number like "205." or "205 -" etc.
    m = re.match(r"^\s*(\d+)", title)
    if m:
        return m.group(1)
    # Fallback: try from dashed slug (take token before first dash if numeric)
    slug = title_to_filename(title)
    first = slug.split('-', 1)[0]
    return first if first.isdigit() else ''

def extract_zip_files(source_dir: str, target_dir: str, title: str) -> None:
    if not os.path.isdir(source_dir):
        return
    os.makedirs(target_dir, exist_ok=True)
    for name in os.listdir(source_dir):
        if not name.lower().endswith('.zip'):
            continue
        src_zip = os.path.join(source_dir, name)
        if not os.path.isfile(src_zip):
            continue
        # Extract directly into the target directory (no extra folder)
        try:
            with zipfile.ZipFile(src_zip, 'r') as zf:
                zf.extractall(target_dir)
        except zipfile.BadZipFile:
            print(f"Skipping invalid zip: {src_zip}")
            continue
        except Exception as e:
            print(f"Failed to extract {src_zip}: {e}")
            continue
        # Delete zip after successful extraction
        try:
            os.remove(src_zip)
        except OSError as e:
            print(f"Failed to delete {src_zip}: {e}")

def prepare_resources(section_title, part_title):
    section_directory_path = "./" + title_to_filename(section_title)
    create_directory(section_directory_path)
    part_directory_path = section_directory_path + "/" + title_to_filename(part_title)
    print(part_directory_path)
    create_directory(part_directory_path)
    create_file(part_directory_path, "note.md")
    note_path = os .path.join(part_directory_path, "note.md")
    append_line(note_path, f"## {part_title}")
    # Move non-zip files into the part directory
    move_non_zip_files("./downloads", part_directory_path)
    # Extract zip files from downloads directly into the part directory
    extract_zip_files("./downloads", part_directory_path, part_title)

def create_code_exercise(section_title, part_title):
    section_directory_path = "./" + title_to_filename(section_title)
    create_directory(section_directory_path)
    part_directory_path = section_directory_path + "/" + title_to_filename(part_title)
    # print(part_directory_path)
    create_directory(part_directory_path)

section_title = "Section 6: State, Events, and Forms: Interactive Components"
# section_title = "coding-exercises"

part_title = "68. CHALLENGE #1: Date Counter (v1)"
print(f"export PART_TITLE='{part_title}'")

prepare_resources(section_title, part_title)
# create_code_exercise(section_title, part_title)
