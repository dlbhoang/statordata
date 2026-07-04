from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        # dùng font đã add trước đó
        self.set_font("DejaVu", "B", 16)
        self.cell(0, 10, "MUSIC THEORY PRACTICE PAPER - GRADE 5", new_x="LMARGIN", new_y="NEXT", align="C")
        self.ln(10)

def create_exam_pdf():
    pdf = PDF()

    # QUAN TRỌNG: add font trước add_page()
    font_path = "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"

    pdf.add_font("DejaVu", "", font_path)
    pdf.add_font("DejaVu", "B", font_path)

    pdf.add_page()

    pdf.set_font("DejaVu", "", 12)

    content = """
1. RHYTHM
- 1.1 Trong nhịp 9/8, nốt đen chấm dôi bằng bao nhiêu nốt móc đơn?
- 1.2 Chọn nhịp đúng cho ô nhịp có 4 nốt đen.
- 1.3 Chuyển đổi ô nhịp 3/4 sang nhịp 9/8 tương ứng.

ĐÁP ÁN GỢI Ý:
1.1: B (6)
"""

    for line in content.split("\n"):
        pdf.multi_cell(0, 8, line)

    pdf.output("De_Thi_Am_Nhac.pdf")
    print("OK")

if __name__ == "__main__":
    create_exam_pdf()