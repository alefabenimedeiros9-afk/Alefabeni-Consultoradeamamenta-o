<?php
// Exemplo opcional de endpoint PHP. Configure HTTPS e validação no servidor.
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, OPTIONS');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
    exit;
}
$data = json_decode(file_get_contents('php://input'), true) ?? [];
$name = trim($data['name'] ?? '');
$phone = trim($data['phone'] ?? '');
$topic = trim($data['topic'] ?? '');
if ($name === '' || $phone === '' || $topic === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Nome, telefone e assunto são obrigatórios']);
    exit;
}
// TODO: aplicar proteção anti-spam, política de privacidade e armazenamento seguro, se necessário.
echo json_encode(['received' => true]);
