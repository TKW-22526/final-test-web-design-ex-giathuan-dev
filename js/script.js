// js/script.js

// Danh sách tất cả các ngành đào tạo của Trường Kỹ thuật và Công nghệ
const productlistt = [
    {
        id: "1",
        name: "Trí tuệ nhân tạo",
        price: "A00, A01, D01, D07, X06, X26, X27",
        description: "Đào tạo chuyên sâu về thuật toán học máy (Machine Learning), xử lý ngôn ngữ tự nhiên, thị giác máy tính và xây dựng các hệ thống thông minh ứng dụng trong đời sống.",
        image: "../assets/logo1.jpg"
    },
    {
        id: "2",
        name: "Công nghệ thông tin",
        price: "A00, A01, D01, D07, X06, X26, X27",
        description: "Chương trình chuẩn đào tạo kỹ sư phát triển phần mềm, quản trị mạng, an toàn thông tin và thiết kế hệ thống cơ sở dữ liệu lớn.",
        image: "../assets/logo2.jpg"
    },
    {
        id: "3",
        name: "Công nghệ thông tin (tích hợp tiếng Anh)",
        price: "A00, A01, D01, D07, X06, X26, X27",
        description: "Chương trình đào tạo Công nghệ thông tin hoàn toàn bằng tiếng Anh hoặc tăng cường ngoại ngữ, giúp sinh viên sẵn sàng làm việc tại các tập đoàn đa quốc gia.",
        image: "../assets/logo3.jpg"
    },
    {
        id: "4",
        name: "Công nghệ Kỹ thuật Điện – Điện tử",
        price: "A00, A01, A03, C01, X05, X06, X07",
        description: "Nghiên cứu và thiết kế các hệ thống truyền tải, phân phối điện năng, thiết kế vi mạch bán dẫn và các thiết bị điện tử ứng dụng IoT.",
        image: "../assets/logo4.jpg"
    },
    {
        id: "5",
        name: "Công nghệ Kỹ thuật Điều khiển và Tự động hóa",
        price: "A00, A01, A03, C01, X05, X06, X07",
        description: "Học về robot công nghiệp, dây chuyền sản xuất tự động, lập trình PLC/SCADA và tích hợp các hệ thống cảm biến thông minh.",
        image: "../assets/logo5.jpg"
    },
    {
        id: "6",
        name: "Công nghệ Kỹ thuật Hóa học",
        price: "A00, B00, C02, D07, X09, X10, X11",
        description: "Nghiên cứu quy trình sản xuất hóa chất, dược phẩm, mỹ phẩm, công nghệ vật liệu mới và tối ưu hóa vận hành trong các nhà máy hóa chất.",
        image: "../assets/logo6.jpg"
    },
    {
        id: "7",
        name: "Công nghệ Kỹ thuật Công trình Xây dựng",
        price: "A00, A01, A03, C01, X05, X06, X07",
        description: "Trang bị kiến thức thiết kế kết cấu, lập dự toán kinh tế xây dựng và quản lý thi công các công trình dân dụng, công nghiệp.",
        image: "../assets/logo7.jpg"
    },
    {
        id: "8",
        name: "Công nghệ Kỹ thuật Cơ khí",
        price: "A00, A01, A03, C01, X05, X06, X07",
        description: "Thiết kế và chế tạo các chi tiết máy, hệ thống máy móc công nghiệp bằng phần mềm CAD/CAM/CAE và gia công trên máy CNC hiện đại.",
        image: "../assets/logo8.jpg"
    },
    {
        id: "9",
        name: "Công nghệ Kỹ thuật Ô tô",
        price: "A00, A01, A03, C01, X05, X06, X07",
        description: "Tập trung vào cấu tạo, nguyên lý hoạt động, chẩn đoán lỗi, bảo dưỡng động cơ và hệ thống điều khiển điện tử trên ô tô hiện đại.",
        image: "../assets/logo9.jpg"
    },
    {
        id: "10",
        name: "Công nghệ Kỹ thuật Cơ điện tử",
        price: "A00, A01, A03, C01, X05, X06, X07",
        description: "Sự giao thoa giữa Cơ khí, Điện tử và Công nghệ thông tin nhằm thiết kế và vận hành các hệ thống máy móc tự động hóa thông minh.",
        image: "../assets/logo10.jpg"
    },
    {
        id: "11",
        name: "Kỹ thuật Xây dựng Công trình Giao thông",
        price: "A00, A01, A03, C01, X05, X06, X07",
        description: "Đào tạo kỹ sư chuyên thiết kế, thi công và quản lý các dự án hạ tầng giao thông như đường bộ, cầu cảng, đường sắt và hệ thống đô thị.",
        image: "../assets/logo11.jpg"
    },
    {
        id: "12",
        name: "Kỹ thuật Môi trường",
        price: "A00, B00, C02, D07, X09, X10, X11",
        description: "Nghiên cứu công nghệ xử lý nước thải, khí thải, chất thải rắn và áp dụng các biện pháp kỹ thuật nhằm bảo vệ môi trường sinh thái.",
        image: "../assets/logo12.jpg"
    },
    {
        id: "13",
        name: "Quản lý Tài nguyên và Môi trường",
        price: "A00, B00, C02, D07, X09, X10, X11",
        description: "Trang bị kiến thức về luật môi trường, đánh giá tác động môi trường (DTM), quy hoạch đất đai và quản lý bền vững tài nguyên thiên nhiên.",
        image: "../assets/logo13.jpg"
    },
    {
        id: "14",
        name: "Công nghệ Nông nghiệp",
        price: "A00, B00, C02, D07, X09, X10, X11",
        description: "Ứng dụng công nghệ cao vào nông nghiệp (nhà màng thông minh, IoT giám sát cây trồng, tự động hóa tưới tiêu) để tối ưu năng suất và chất lượng.",
        image: "../assets/logo14.jpg"
    }
];