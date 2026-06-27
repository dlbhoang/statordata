#!/bin/bash
# 📦 Project Restructuring Script
# Run this in your project root directory

echo "🚀 Starting Project Restructuring..."

# 1. Create new folder structure
echo "📁 Creating folder structure..."
mkdir -p public/images/{logos,diagrams,assets}
mkdir -p public/documents
mkdir -p src/{api,components,pages,store,utils,styles,config,router,types,composables}
mkdir -p src/components/{common,forms,layout,diagrams}
mkdir -p tests/{unit,integration}
mkdir -p docs
mkdir -p .github/workflows

# 2. Move images
echo "🖼️  Organizing images..."
[ -f "lOGOWEB.jpg" ] && mv lOGOWEB.jpg public/images/logos/
[ -f "HINHTHONGSODINHMUC.jpg" ] && mv HINHTHONGSODINHMUC.jpg public/images/diagrams/
[ -f "MOHINH2D.jpg" ] && mv MOHINH2D.jpg public/images/diagrams/
[ -f "LYTHUYETMACHTUTRONGMAYDIEN.png" ] && mv LYTHUYETMACHTUTRONGMAYDIEN.png public/images/diagrams/
[ -f "app.gif" ] && mv app.gif public/images/assets/

# 3. Move PDFs
echo "📄 Organizing documents..."
mv *.pdf public/documents/ 2>/dev/null || echo "   No PDF files to move"

# 4. Move other docs
echo "📚 Organizing documentation..."
[ -f "PDF_MATCH_CHECKLIST.md" ] && mv PDF_MATCH_CHECKLIST.md docs/
[ -f "README.md" ] && cp README.md docs/README_BACKUP.md  # Keep original too

echo "✅ Folder restructuring complete!"
echo ""
echo "📝 Next steps:"
echo "1. Review the new structure"
echo "2. Update image paths in your components"
echo "3. Update import statements"
echo "4. Remove SSH keys from git history"
echo ""
echo "Run: git rm --cached statordata_deploy statordata_deploy.pub"