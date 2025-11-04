import { useEffect, useState } from "react";
import axios from "axios";

function Facturas() {
    const [facturas, setFacturas] = useState([]);
    const [cliente, setCliente] = useState("");
    const [total, setTotal] = useState("");

    const cargarFacturas = async () => {
        const res = await axios.get("http://localhost:8080/facturas");
        setFacturas(res.data);
    };

    const guardarFactura = async () => {
        await axios.post("http://localhost:8080/facturas", { cliente, total });
        setCliente("");
        setTotal("");
        cargarFacturas();
    };

    useEffect(() => {
        cargarFacturas();
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>Sistema de Facturación</h1>
            <div>
                <input
                    placeholder="Cliente"
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                />
                <input
                    placeholder="Total"
                    type="number"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}
                />
                <button onClick={guardarFactura}>Guardar</button>
            </div>

            <table border="1" style={{ marginTop: 20 }}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Total</th>
                    <th>Fecha</th>
                </tr>
                </thead>
                <tbody>
                {facturas.map((f) => (
                    <tr key={f.idFactura}>
                        <td>{f.idFactura}</td>
                        <td>{f.cliente}</td>
                        <td>{f.total}</td>
                        <td>{f.fecha}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Facturas;
