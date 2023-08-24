package gui;

import ipc1.clase5.AppState;
import ipc1.clase5.Curso;
import ipc1.clase5.Profesor;
import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JFileChooser;
import javax.swing.JOptionPane;
import javax.swing.filechooser.FileNameExtensionFilter;
import javax.swing.table.DefaultTableModel;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.data.category.DefaultCategoryDataset;

/**
 *
 * @author josed
 */
public class ProfesorMainFrame extends javax.swing.JFrame {
    Profesor profesor;
    
    public ProfesorMainFrame() {
        initComponents();
        
        this.setVisible(true); // Hace visible la ventana
        this.setLocationRelativeTo(null); // La coloca al centro
        this.setResizable(false); // Bloquea el redimensionamiento de la ventana
        this.setTitle("Login"); // Coloca un titulo a la ventana
        
       this.profesor = (Profesor)AppState.usuarioLogeado;
       this.llenarTablaCursos();
       this.generarGrafica();
       
       this.addWindowListener(new WindowAdapter() {
           @Override
           public void windowClosing(WindowEvent e) {
               AppState.serializar();
           }
       });
    }
    
    private void llenarTablaCursos() {
        DefaultTableModel modelo = new DefaultTableModel();
        modelo.addColumn("Nombre Curso");
        modelo.addColumn("Creditos");
        for (Curso curso : this.profesor.cursos) {
            Object[] fila = { curso.nombre, curso.creditos };
            modelo.addRow(fila);
        }
        cursosJTable.setModel(modelo);
    }
    
    private String generarContenidoReporteHtml() {
        StringBuilder sb = new StringBuilder();
        
        // Se coloca la etiqueta de apertura de la tabla
        sb.append("<table border=\"1\" cellspacing=\"0\">\n");
        
        // Se agregan los nombres de las columnas de la tabla
        sb.append("<tr>\n");
        sb.append("<th>").append("Nombre de Curso").append("</th>");
        sb.append("<th>").append("Creditos").append("</th>");
        sb.append("</tr>\n");
        
        // Se agregan las filas de la tabla
        for (Curso curso : this.profesor.cursos) {
            sb.append("<tr>");
            sb.append("<td>").append(curso.nombre).append("</td>");
            sb.append("<td>").append(curso.creditos).append("</td>");
            sb.append("</tr>");
        }
        
        // Se coloca la etiqueta de cierre de la tabla
        sb.append("</table>\n");
        
        return sb.toString();
    }
    
    public void generarGrafica() {
        DefaultCategoryDataset dataset = new DefaultCategoryDataset();
        dataset.setValue(10, "Notas", "Curso1");
        dataset.setValue(20, "Notas", "Curso2");
        dataset.setValue(39, "Notas", "Curso3");
        
        JFreeChart barChart = ChartFactory.createBarChart(
            "Titulo del Grafico",        // Título del gráfico
            "Eje X",       // Etiqueta del eje X
            "Eje Y",              // Etiqueta del eje Y
            dataset,                            // Conjunto de datos
            PlotOrientation.VERTICAL,   // Orientación del gráfico
            true,                       // Incluir leyenda
            true,                       // Incluir herramientas de información
            false                       // No incluir URLs de hipervínculos
        );
        
        ChartPanel chartPanel = new ChartPanel(barChart);
        chartPanel.setPreferredSize(new Dimension(251, 301));
        
        chartJPanel.setLayout(new BorderLayout());
        chartJPanel.add(chartPanel, BorderLayout.NORTH);
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jTabbedPane1 = new javax.swing.JTabbedPane();
        jPanel1 = new javax.swing.JPanel();
        jScrollPane1 = new javax.swing.JScrollPane();
        cursosJTable = new javax.swing.JTable();
        exportarCursosButton = new javax.swing.JButton();
        cursosCursosButton = new javax.swing.JButton();
        chartJPanel = new javax.swing.JPanel();
        jPanel2 = new javax.swing.JPanel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        cursosJTable.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null},
                {null, null},
                {null, null},
                {null, null}
            },
            new String [] {
                "Nombre Curso", "Creditos"
            }
        ) {
            Class[] types = new Class [] {
                java.lang.String.class, java.lang.Integer.class
            };

            public Class getColumnClass(int columnIndex) {
                return types [columnIndex];
            }
        });
        jScrollPane1.setViewportView(cursosJTable);

        exportarCursosButton.setText("Exportar Cursos");
        exportarCursosButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                exportarCursosButtonActionPerformed(evt);
            }
        });

        cursosCursosButton.setText("Cargar Cursos");
        cursosCursosButton.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                cursosCursosButtonActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout chartJPanelLayout = new javax.swing.GroupLayout(chartJPanel);
        chartJPanel.setLayout(chartJPanelLayout);
        chartJPanelLayout.setHorizontalGroup(
            chartJPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 0, Short.MAX_VALUE)
        );
        chartJPanelLayout.setVerticalGroup(
            chartJPanelLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 301, Short.MAX_VALUE)
        );

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(14, 14, 14)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 377, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(exportarCursosButton, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(cursosCursosButton, javax.swing.GroupLayout.DEFAULT_SIZE, 251, Short.MAX_VALUE)
                    .addComponent(chartJPanel, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap(21, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(16, 16, 16)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 407, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(cursosCursosButton)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(exportarCursosButton)
                        .addGap(26, 26, 26)
                        .addComponent(chartJPanel, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap(15, Short.MAX_VALUE))
        );

        jTabbedPane1.addTab("Cursos", jPanel1);

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 681, Short.MAX_VALUE)
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 438, Short.MAX_VALUE)
        );

        jTabbedPane1.addTab("Perfil", jPanel2);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jTabbedPane1)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jTabbedPane1)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void cursosCursosButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_cursosCursosButtonActionPerformed
       JFileChooser fileChooser = new JFileChooser();
       fileChooser.setMultiSelectionEnabled(true);
       FileNameExtensionFilter csvFilter = new FileNameExtensionFilter("Archivos CSV", "csv");
       fileChooser.setFileFilter(csvFilter);
       
       int fileChooserState = fileChooser.showOpenDialog(this);
       if (fileChooserState == JFileChooser.APPROVE_OPTION) {
           File[] archivos = fileChooser.getSelectedFiles();
           for (File file : archivos) {
                try {
                    BufferedReader reader = new BufferedReader(new FileReader(file));
                    String linea;
                   
                    while ((linea = reader.readLine()) != null) {
                        String[] datos = linea.split(",");
                        String nombreCurso = datos[0];
                        int creditos = Integer.parseInt(datos[1]);
                        this.profesor.agregarCurso(nombreCurso, creditos);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                    System.out.println("Error Cargando cursos.");
                }
           }
       }
       this.llenarTablaCursos();
       this.generarGrafica();
    }//GEN-LAST:event_cursosCursosButtonActionPerformed

    private void exportarCursosButtonActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_exportarCursosButtonActionPerformed
        // Crear carpeta par a los reportes si no exsiste
        File carpeta = new File("./reportes");
        if (!carpeta.exists()) {
            carpeta.mkdir();
        }
       
       String contenidoHtml = this.generarContenidoReporteHtml();
       
       try {
           FileWriter fileWriter;
           fileWriter = new FileWriter("./reportes/Curso.html");
           fileWriter.write(contenidoHtml);
           fileWriter.close();
           
           String mensajeExito = "Reporte generado en la carpeta \"Reporter\" dentro del proyecto.";
           JOptionPane.showMessageDialog(this, mensajeExito, "Alerta", JOptionPane.INFORMATION_MESSAGE);
       } catch(IOException e) {
           System.out.println("No se pudo generer el reporte html de los cursos.");
       }
    }//GEN-LAST:event_exportarCursosButtonActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(ProfesorMainFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(ProfesorMainFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(ProfesorMainFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(ProfesorMainFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new ProfesorMainFrame().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JPanel chartJPanel;
    private javax.swing.JButton cursosCursosButton;
    private javax.swing.JTable cursosJTable;
    private javax.swing.JButton exportarCursosButton;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JTabbedPane jTabbedPane1;
    // End of variables declaration//GEN-END:variables
}
