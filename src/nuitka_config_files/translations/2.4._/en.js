// noinspection JSUnusedGlobalSymbols
/**
 * 中文翻译文件
 * @author erduotong
 */
export default {
    // Title class translation here
    title: {
        basic: "Basic Settings",
        control_the_inclusion_of_modules_and_packages_in_result: "Control the Inclusion of Modules and Packages in Result",
        control_the_following_into_imported_modules: "Control the Following into Imported Modules",
        onefile_options: "Onefile Options",
        data_files: "Data Files",
        metadata_support: "Metadata Support",
        DLL_files: "DLL (Dynamic Link Library) Files",
        Linux_specific_controls: "Linux Specific Controls",
        control_the_warnings_to_be_given_by_Nuitka: "Control the Warnings to be Given by Nuitka",
        immediate_execution_after_compilation: "Immediate Execution After Compilation",
        compilation_choices: "Compilation Choices",
        output_choices: "Output Choices",
        deployment_control: "Deployment Control",
        environment_control: "Environment Control",
        debug_features: "Debug Features",
        backend_c_compiler_choice: "Backend C Compiler Choice",
        cache_control: "Cache Control",
        PGO_compilation_choices: "PGO (Profile Guided Optimization) Compilation Choices",
        tracing_features: "Tracing Features",
        general_os_controls: "General OS Controls",
        windows_specific_controls: "Windows Specific Controls",
        macOS_specific_controls: "macOS Specific Controls",
        binary_version_information: "Binary Version Information",
        plugin_control: "Plugin Control",
        cross_compilation: "Cross Compilation",
        plugin_options_of_anti_bloat: "Anti-Bloat Plugin Options",
        plugin_options_of_spacy: "Spacy Plugin Options",
    },
    // Basic
    module: {
        name: "Module Mode",
        desc: "Create an importable binary extension module executable instead of a program. Disabled by default.",
    },
    standalone: {
        name: "Standalone Mode",
        desc: "Enable standalone mode for output. This allows you to transfer the binary to other machines without requiring the existing Python environment. This also means it will become large. It will enable these options: \"--follow-imports\" and \"--python-flag=no_site\".",
    },
    onefile: {
        name: "Onefile Mode",
        desc: "On top of standalone mode, enable onefile mode. This means instead of a folder, a compressed executable file is created and used.",
    },
    python_flag: {
        name: "Python Flags",
        desc: "Python flags to use. Defaults to what you used to run Nuitka, this enforces specific modes. These are also options present in standard Python executables.",
        elements: {
            s: {
                name: "Exclude site-packages directory",
                desc: "Alias for no_site",
            },
            static_hashes: {
                name: "Static Hashes",
                desc: "Do not use hash randomization.",
            },
            no_warnings: {
                name: "Disable Warnings",
                desc: "Do not give warnings from the Python runtime.",
            },
            o: {
                name: "No Error Checking",
                desc: "Do not include any debugging/error checking (assert) statements.",
            },
            no_docstrings: {
                name: "No Docstrings",
                desc: "Do not include docstrings.",
            },
            u: {
                name: "Unbuffered",
                desc: "Alias for unbuffered, do not use buffering.",
            },
            isolated: {
                name: "No External Code",
                desc: "Do not load external code.",
            },
            m: {
                name: "Package Mode",
                desc: "Package mode, compile as \"package.__main__\".",
            },
        },
    },
    python_debug: {
        name: "Python Debug",
        desc: "Whether to use the debug version or not. Defaults to what you used to run Nuitka, which is likely a non-debug version. For debugging and testing purposes only.",
    },
    python_for_scons: {
        name: "Python Path for Scons",
        desc: "When compiling with Python 3.4, provide a path to a Python binary for Scons to use. Otherwise, Nuitka can use the Python you used to run Nuitka, or find the Nuitka installation itself, e.g., from the Windows registry. On Windows, requires Python 3.5 or higher; on non-Windows, Python 2.6 or Python 2.7 can also be used.",
    },
    main: {
        name: "Main Program Path",
        desc: "If specified only once (e.g., --main=\"1.py\"), this will override positional arguments, i.e., the filename to compile (entry). If specified multiple times (e.g., --main=\"1.py\" --main=\"2.py\"), it will enable \"multidist\", which allows you to create binaries that depend on the filename or invocation name. (Allows multiple main programs with the same compilation parameters)",
    },
    // Control the inclusion of modules and packages in result (控制结果中包含的模块和包)
    include_package: {
        name: "Include Package",
        desc: "Include the entire package. Given in the form of a Python namespace, e.g., 'some_package.sub_package', then Nuitka will find it and include it along with all modules found below its created binary or extension module's disk location and make it importable by code. To avoid unwanted sub-packages, such as tests, you can do '--nofollow-import-to=*.tests'. Defaults to empty.",
    },
    include_module: {
        name: "Include Module",
        desc: "Include a single module. Given in the form of a Python namespace, e.g., 'some_package.some_module', then Nuitka will find it and include it in its created binary or extension module and make it importable by code. Defaults to empty.",
    },
    include_plugin_directory: {
        name: "Include Plugin Directory",
        desc: "Include code found in this directory as if they were each the main file. This overrides other include options. You should prefer using other include options. They find things by name rather than filename, and these options can find things in 'sys.path'. This option is only for very special use cases. Can be given multiple times. Defaults to empty.",
    },
    include_plugin_files: {
        name: "Include Plugin Files",
        desc: "Include files matching PATTERN. Overrides all other follow options. Can be given multiple times. Defaults to empty.",
    },
    prefer_source_code: {
        name: "Prefer Source Code",
        desc: "For already compiled extension modules, if source code is available and extension modules exist, usually the extension module is used, but for best performance, it is best to compile the module from the available source code. If not needed, use --nop-prefer-source-code to disable warnings about this. Disabled by default.",
    },
    // Control the following into imported modules (控制导入模块)
    follow_imports: {
        name: "Follow Imports",
        desc: "Follow all imported modules. Enabled by default in standalone mode, otherwise disabled.",
    },
    follow_import_to: {
        name: "Follow Import to Module",
        desc: "Follow to this module if it is used, or if it is a package, follow the entire package. Can be given multiple times. Defaults to empty.",
    },
    nofollow_import_to: {
        name: "Do Not Follow Import to Module",
        desc: "Do not follow this module name even if it is used, or if it is a package name, do not follow the entire package, this option overrides all other options. This can also include patterns, e.g., \"*.tests\". Can be given multiple times. Defaults to empty.",
    },
    nofollow_imports: {
        name: "Do Not Follow All Imports",
        desc: "Do not recursively follow into any imported modules, this will override all other include options and cannot be used in standalone mode. Disabled by default.",
    },
    follow_stdlib: {
        name: "Follow Standard Library Imports",
        desc: "Also follow modules imported from the standard library, this will greatly increase compilation time and is not well tested, sometimes it may not work. Disabled by default.",
    },
    // Onefile options (单文件选项)
    onefile_tempdir_spec: {
        name: "Onefile Tempdir Location",
        desc: "In onefile mode, use this as the folder to unpack to. Using a string like '{CACHE_DIR}/{COMPANY}/{PRODUCT}/{VERSION}' is a good static cache path, and it will not be deleted.",
        elements: {
            user_tempdir: {
                name: "User Tempdir",
                desc: "Use the user's temp directory.",
            },
        },
    },
    onefile_child_grace_time: {
        name: "Onefile Child Grace Time",
        desc: "When stopping child processes, e.g., due to CTRL-C or shutdown, Python code gets a \"KeyboardInterrupt\", which may handle events such as flushing data. This is the amount of time before hard killing child processes. The unit is milliseconds, default is 5000.",
    },
    onefile_no_compression: {
        name: "No Compression Onefile",
        desc: "Disable payload compression when creating onefile. This is mainly for debugging purposes or to save time. Disabled by default.",
    },
    onefile_as_archive: {
        name: "Onefile as Archive",
        desc: "When creating onefile, use an archive format that can be unpacked by \"nuitka-onefile-unpack\", instead of a stream that only the onefile program itself can unpack.",
    },
    // Data files (数据文件)
    include_package_data: {
        name: "Include Package Data",
        desc: "Include data files for the given package. DLLs and extension modules are not data files and will not be included like this. Filename patterns can be used as indicated below. By default, package data files are not included, but package configurations can do this. This will only include non-DLL and non-extension modules, i.e., actual data files that exist. Can be given multiple times. Defaults to empty.",
    },
    include_data_files: {
        name: "Include Data Files",
        desc: "Include data files by assigned filenames. There are many allowed forms. Use '--include-data-files=/path/to/file/.txt=folder_name/some.txt' to copy a single file, or '--include-data-files=/path/to/files/.txt=folder_name/' to put all matching files into that folder. For recursive copying, there is a form with three values: '--include-data-files=/path/to/scan=folder_name=**/*.txt', which preserves the directory's file structure. Defaults to empty.",
    },
    include_data_dir: {
        name: "Include Data Directory",
        desc: "Include the entire directory's data files in the distribution. This is recursive. If you want non-recursive inclusion, see '--include-data-files' with patterns. E.g., '--include-data-dir=/path/some_dir=data/some_dir' for normal copying of the entire directory. All non-code files will be included, and you can also use '--noinclude-data-files' options to remove them. Defaults to empty.",
    },
    noinclude_data_files: {
        name: "Do Not Include Data Files",
        desc: "Do not include data files matching the given filename patterns. This is for target filenames, not source paths. So, to ignore a file pattern from the package data of 'package_name', it should match as 'package_name/*.txt', or for an entire directory simply use 'package_name'. Defaults to empty.",
    },
    include_onefile_external_data: {
        name: "Include Onefile External Data",
        desc: "Include the specified data file patterns in the onefile binary's external instead of internal. Only meaningful with '--onefile' compilation. First, files must be specified in some way to be included, then this option refers to the target path. Defaults to empty.",
    },
    list_package_data: {
        name: "List Package Data",
        desc: "Output the data files found for the given package name. Defaults to not executing.",
    },
    include_raw_dir: {
        name: "Include Raw Directory",
        desc: "Include the raw directory entirely in the distribution. This is recursive. Check '--include-data-dir' for the proper option. Defaults to empty.",
    },
    // Metadata support (元数据支持)
    include_distribution_metadata: {
        name: "Include Distribution Metadata",
        desc: "Include metadata information for the given distribution name. Some packages check for the presence of metadata, version, entry points, etc., and without these options, it will only work if identified at compile time, which is not always the case. Of course, this only makes sense for packages included in the compilation. Defaults to empty.",
    },
    // DLL files (DLL (动态链接库) 文件)
    noinclude_dlls: {
        name: "Do Not Include DLLs",
        desc: "Do not include DLLs matching the given filename patterns. This is for target filenames, not source paths. So, to ignore a DLL 'someDLL' included in the package 'package_name', it should match as 'package_name/someDLL.*'. Defaults to empty.",
    },
    list_package_dlls: {
        name: "List Package DLLs",
        desc: "Find and output the DLLs for the given package name. Defaults to not executing.",
    },
    // Control the warnings to be given by Nuitka (控制 Nuitka 发出的警告)
    warn_implicit_exceptions: {
        name: "Warn Implicit Exceptions",
        desc: "Enable warnings for implicit exceptions detected at compile time.",
    },
    warn_unusual_code: {
        name: "Warn Unusual Code",
        desc: "Enable warnings for unusual code detected at compile time.",
    },
    assume_yes_for_downloads: {
        name: "Assume Yes for Downloads",
        desc: "Allow Nuitka to download external code when needed. E.g., dependency walker, ccache, or even gcc on Windows. To disable, redirect input from the nul device, e.g., '</dev/null' or '<NUL:'. Defaults to prompting for downloads.",
    },
    nowarn_mnemonic: {
        name: "Do Not Warn Mnemonic",
        desc: "Disable warnings for the given mnemonic. These are to ensure you know certain topics and usually point to the Nuitka website. The mnemonic is the part at the end of the URL, without the HTML suffix. Can be given multiple times and accepts shell patterns. Defaults to empty.",
    },
    // Immediate execution after compilation (编译后立即执行)
    run: {
        name: "Run Immediately",
        desc: "Execute the created binary file (or import the compiled module) immediately. Disabled by default.",
    },
    debugger: {
        name: "Run in Debugger",
        desc: "Execute in a debugger, e.g., 'gdb' or 'lldb' to automatically get a stack trace. Disabled by default.",
    },
    // Compilation choices (编译选项)
    user_package_configuration_files: {
        name: "User Package Configuration Files",
        desc: "User-provided Yaml files containing package configurations. You can include DLL files, remove redundancies, add hidden dependencies. Please refer to the Nuitka package configuration manual for full format usage instructions. Can be given multiple times. Defaults to empty.",
    },
    full_compat: {
        name: "Full CPython Compatibility",
        desc: "Ensure absolute compatibility with CPython. Even disallow minor deviations from CPython behavior, such as different or worse tracebacks or exception messages. These behaviors are not truly incompatible but merely different or worse. This is for testing only and should not be used.",
    },
    file_reference_choice: {
        name: "File Reference Choice",
        desc: "Choose the value for \"__file__\". Created binaries and modules \"at runtime\" (i.e., the default for standalone binaries and module mode) use their own location to deduct the value of \"__file__\". Included packages pretend to be in a directory below that location. This allows including data files in deployments. For faster compilation, it is better to use the \"original\" value, where the source file location is used. Using \"frozen\" will use the \"<frozen module_name>\" symbol. For compatibility reasons, the \"__file__\" value will always have a \".py\" suffix, regardless of its actual value.",
        elements: {
            original: {
                name: "Original",
                desc: "Use the source file location.",
            },
            frozen: {
                name: "Frozen",
                desc: "Use the \"<frozen module_name>\" symbol.",
            },
        },
    },
    module_name_choice: {
        name: "Module Name Choice",
        desc: "Choose the value for \"__name__\" and \"__package__\". Using \"runtime\" (the default for module mode) created modules use the package to infer the value of \"__package__\" for full compatibility. The \"original\" value (the default for other modes) allows more static optimizations but is incompatible for modules that can usually be loaded into any package.",
        elements: {
            original: {
                name: "Original",
                desc: "Allow more static optimizations (default for other modes).",
            },
            runtime: {
                name: "Runtime",
                desc: "Use the package to infer \"__package__\" for full compatibility (default for module mode).",
            },
        },
    },
    // Output choices (输出选择)
    output_filename: {
        name: "Output Filename",
        desc: "Specify the name of the executable file. This option is not available for extension modules and standalone mode, using it will result in an error. This may need to include existing path information. Defaults to \"<program_name>.exe\" on the current platform.",
        elements: {
            program_name: {
                name: "Program Name",
                desc: "<program_name>",
            },
        },
    },
    output_dir: {
        name: "Output Directory",
        desc: "Specify the location to place intermediate files and the final output file. The chosen directory will house the build folder, distribution folder, binary, etc. Defaults to the current directory.",
        elements: {
            current_directory: {
                name: "Current Directory",
                desc: "Current directory.",
            },
        },
    },
    remove_output: {
        name: "Remove Build Folder",
        desc: "Delete the build folder after generating the exe or module file. Disabled by default.",
    },
    no_pyi_file: {
        name: "Do Not Generate pyi File",
        desc: "Do not create a \".pyi\" file for Nuitka to create extension modules for detecting implicit imports. Disabled by default.",
    },
    // Deployment control (部署控制)
    deployment: {
        name: "Deployment Mode",
        desc: "Disable code intended to make finding compatibility issues easier. For example, this will prevent execution with the '-c' argument, which is typically used by code trying to run modules and can cause programs to repeatedly self-start. Disable it once you deploy to end-users, as it is very helpful during development for finding typical issues. Disabled by default.",
    },
    no_deployment_flag: {
        name: "Do Not Use Deployment Flag",
        desc: "Keep deployment mode but selectively disable parts of it. Deployment mode errors will output these identifiers. Defaults to empty.",
    },
    // Environment control (环境控制)
    force_runtime_environment_variable: {
        name: "Force Runtime Environment Variable",
        desc: "Force the environment variable to the given value. Defaults to empty.",
    },
    // Debug features (调试功能)
    debug: {
        name: "Debug Mode",
        desc: "Perform all possible self-checks to find bugs in Nuitka, please do not use in production. Disabled by default.",
    },
    no_debug_immortal_assumptions: {
        name: "Disable Debug Assumptions for Immortal Objects",
        desc: "Disable checks usually done with \"--debug\". On Python 3.12 and above, do not check known immortal object assumptions. Some C libraries break them. If \"--debug\" is enabled, checks are done by default.",
    },
    unstripped: {
        name: "Do Not Strip Debug Information",
        desc: "Keep debug information in the generated object files for better interaction with debuggers. Disabled by default.",
    },
    profile: {
        name: "Profiling",
        desc: "Enable vmprof-based timing profiling. Currently not functional. Disabled by default.",
    },
    internal_graph: {
        name: "Internal Graph",
        desc: "Create graphs of the optimization process internally, do not use for the whole program, please only for small test cases. Disabled by default.",
    },
    trace_execution: {
        name: "Trace Execution",
        desc: "Trace execution and output. Output code lines before executing them. Disabled by default.",
    },
    recompile_c_only: {
        name: "Recompile C Only",
        desc: "This is not incremental compilation, only for Nuitka development. Recompile existing files to C. Allows recompiling edited C files for quick debugging of changes to generated source code, e.g., to see if code passes, output of values, etc. Disabled by default. The files it looks at depend on the compilation of the Python source code.",
    },
    xml: {
        name: "Output XML",
        desc: "Write the internal program structure and optimization results in XML format to the given filename.",
    },
    experimental: {
        name: "Experimental",
        desc: "Use features declared as \"experimental\". If there are no experimental features in the code, this may have no effect. Use the secret tags for each experimental feature (check the source code).",
    },
    low_memory: {
        name: "Low Memory Mode",
        desc: "Try to use less memory by reducing the forking of C compilation tasks and using less memory options. For embedded machines. Use when facing out-of-memory issues. Disabled by default.",
    },
    create_environment_from_report: {
        name: "Create Environment from Report",
        desc: "Create a new virtual environment in non-existent paths based on the given report file, e.g., '--report=compilation-report.xml'. Defaults to not executing.",
    },
    generate_c_only: {
        name: "Generate C Source Only",
        desc: "Only generate C source code, do not compile to binaries or modules. This is for debugging and code coverage analysis, does not waste CPU. Do not assume you can directly use this. Disabled by default.",
    },
    // Backend C compiler choice (后端 C 编译器选择)
    clang: {
        name: "Force Clang",
        desc: "Force the use of clang for compilation. On Windows systems, this requires a working Visual Studio version to be supported. Disabled by default.",
    },
    mingw64: {
        name: "Force MinGW64",
        desc: "Force the use of MinGW64 on Windows. Defaults to off unless using MSYS2 and MinGW Python.",
    },
    msvc: {
        name: "Use MSVC Version",
        desc: "Force the use of a specific MSVC version on Windows. Allowed values are \"14.3\" (MSVC 2022) and other MSVC version numbers. Use \"list\" to get a list of installed compilers or \"latest\". Defaults to the latest MSVC if available, otherwise uses MinGW64.",
        elements: {
            latest: {
                name: "Latest",
                desc: "Use the latest MSVC version.",
            },
        },
    },
    jobs: {
        name: "Parallel Compilation Jobs",
        desc: "Specify the number of parallel C compiler jobs allowed. Negative values mean the number of CPUs on the system minus the given value. By default, the full number of system CPUs is used unless low memory mode is enabled; in low memory mode, the default is 1.",
    },
    lto: {
        name: "Link Time Optimization",
        desc: "Use link-time optimization (MSVC, gcc, clang) allowed values are \"yes\", \"no\", and \"auto\" (known to work). Defaults to \"auto\".",
        elements: {
            yes: {
                name: "Yes",
                desc: "Use link-time optimization.",
            },
            no: {
                name: "No",
                desc: "Do not use link-time optimization.",
            },
            auto: {
                name: "Auto",
                desc: "Automatically use link-time optimization if known to work.",
            },
        },
    },
    static_libpython: {
        name: "Using Python's Static Link Library",
        desc: "Use Python's static link library. Allowed values are \"yes\", \"no\", and \"auto\" (known to work). Defaults to \"auto\".",
        elements: {
            yes: {
                name: "Yes",
                desc: "Use Python's static link library",
            },
            no: {
                name: "No",
                desc: "Do not use Python's static link library",
            },
            auto: {
                name: "Auto",
                desc: "Automatically use Python's static link library",
            },
        },
    },
    cf_protection: {
        name: "gcc Compiler CF Protection Mode",
        desc: "This option is specific to gcc. Select the \"cf-protection\" mode for the gcc compiler. The default value \"auto\" uses gcc's default, but you can override it, \n" +
            "for example, using the \"none\" value to disable it. For detailed information on \"-fcf-protection\", refer to the gcc documentation",
        elements: {
            auto: {
                name: "Auto",
                desc: "Use gcc's default value",
            },
        },
    },
    // Cache Control
    disable_cache: {
        name: "Disable Cache",
        desc: "Disable the selected cache, setting \"all\" for all caches. Currently allowed values are: \"all\", \"ccache\", \"bytecode\", \n" +
            "\"compression\", \"dll-dependencies\". \n" +
            "Can be given multiple times or using comma-separated values. Defaults to none.",
        elements: {
            all: {
                name: "All",
                desc: "Disable all caches",
            },
            ccache: {
                name: "ccache Cache",
                desc: "Do not attempt to use ccache (gcc, clang, etc.) or clcache (MSVC, clangcl).",
            },
            bytecode: {
                name: "Bytecode Cache",
                desc: "Do not reuse the dependency analysis results of modules, especially those from the standard library, which are included as bytecode.",
            },
            compression: {
                name: "Compression Cache",
                desc: "Disable compression cache",
            },
            dll_dependencies: {
                name: "DLL Dependencies Cache",
                desc: "Disable the dependency analyzer cache. This will significantly lengthen the time to create the distribution folder, but can be used if the cache is suspected to cause errors.",
            },
        },
    },
    clean_cache: {
        name: "Clean Cache",
        desc: "Clean the given cache before execution, setting \"all\" for all caches. Currently allowed values are: \n" +
            "\"all\", \"ccache\", \"bytecode\", \"compression\", \"dll-dependencies\". \n" +
            "Can be given multiple times or using comma-separated values. Defaults to none.",
        elements: {
            all: {
                name: "All",
                desc: "Clean all caches",
            },
            ccache: {
                name: "ccache Cache",
                desc: "Clean ccache cache",
            },
            bytecode: {
                name: "Bytecode Cache",
                desc: "Clean bytecode cache",
            },
            compression: {
                name: "Compression Cache",
                desc: "Clean compression cache",
            },
            dll_dependencies: {
                name: "DLL Dependencies Cache",
                desc: "Clean DLL dependencies cache",
            },
        },
    },
    disable_bytecode_cache: {
        name: "Disable Bytecode Cache",
        desc: "Do not reuse the dependency analysis results of modules, especially those from the standard library, which are included as bytecode. Same effect as --disable-cache=bytecode.",
    },
    disable_ccache: {
        name: "Disable ccache",
        desc: "Do not attempt to use ccache (gcc, clang, etc.) or clcache (MSVC, clangcl). Same effect as --disable-cache=ccache.",
    },
    disable_dll_dependency_cache: {
        name: "Disable DLL Dependencies Cache",
        desc: "Disable the dependency analyzer cache. This will significantly lengthen the time to create the distribution folder, but can be used if the cache is suspected to cause errors. \n" +
            "Same effect as --disable-cache=dll-dependencies.",
    },
    force_dll_dependency_cache_update: {
        name: "Force Update DLL Dependencies Cache",
        desc: "Used to update the dependency analyzer cache. This will significantly lengthen the time to create the distribution folder, but can be used if the cache is suspected to cause errors or needs updating.",
    },
    // PGO compilation choices
    pgo_c: {
        name: "Profile-Guided Optimization",
        desc: "Enable C-level profile-guided optimization (PGO) by first profiling and then using the results to feed back into the C compilation. \n" +
            "Note: This is experimental and not yet working with Nuitka's standalone mode. Defaults to off.",
    },
    pgo_args: {
        name: "PGO Arguments",
        desc: "Arguments to pass when doing profile-guided optimization (PGO). These arguments are passed during the PGO profiling run to the specially built executable. Defaults to empty.",
    },
    pgo_executable: {
        name: "PGO Executable",
        desc: "Command to execute when collecting profile information. Use it only if you need to start it via a prepared script. Defaults to using the created program.",
    },
    // Tracing features
    report: {
        name: "Output Report",
        desc: "Enter an XML filename to report detailed information about modules, data files, compilation, plugins, etc. in an XML output file. This is also very useful for reporting issues. \n" +
            "For example, these reports can be used to easily recreate environments using '--create-environment-from-report', but the report contains a lot of information. Defaults to off.",
    },
    report_diffable: {
        name: "Report Diffable",
        desc: "Report data in a comparable way, i.e., without time or memory usage values that change with runs. Defaults to off.",
    },
    report_user_provided: {
        name: "Report User Provided Values",
        desc: "Report data from you. This can be given multiple times and can be in any form of \"key=value\", where key should be an identifier, \n" +
            "for example, using \"--report-user-provided=pipenv-lock-hash=64a5e4\" to track some input values. Defaults to empty.",
    },
    report_template: {
        name: "Report Template",
        desc: "Report via template. Requires providing template and output filename \"template.rst.j2:output.rst\". For built-in templates, see the user manual. \n" +
            "Can be given multiple times. Defaults to empty.",
    },
    quiet: {
        name: "Quiet Mode",
        desc: "Suppress all informational output but show warnings. Defaults to off.",
    },
    show_scons: {
        name: "Show Scons",
        desc: "Run the C build backend Scons, showing the executed commands and detailed information about the detected compiler. Defaults to off.",
    },
    no_progressbar: {
        name: "No Progress Bar",
        desc: "Disable the progress bar. Defaults to off.",
    },
    show_progress: {
        name: "Show Progress",
        desc: "Obsolete: Provide progress information and statistics. Disables the normal progress bar. Defaults to off.",
    },
    show_memory: {
        name: "Show Memory",
        desc: "Show memory usage. Defaults to off.",
    },
    show_modules: {
        name: "Show Modules",
        desc: "Obsolete: You should use the '--report' file instead. Provide information about included modules and DLLs. Defaults to off.",
    },
    show_modules_output: {
        name: "Show Modules Output Path",
        desc: "Used to set the output location for '--show-modules', should be a filename. Defaults to standard output.",
    },
    verbose: {
        name: "Verbose Mode",
        desc: "Output detailed information about the actions taken, especially during optimization, which can produce a lot of output. Defaults to off.",
    },
    verbose_output: {
        name: "Verbose Mode Output Path",
        desc: "Used to set the output location for '--verbose', should be a filename. Defaults to standard output.",
    },
    // General OS controls
    force_stdout_spec: {
        name: "Force Standard Output Specification",
        desc: "Force the program's standard output to this location. Useful for programs that disable the console and for Windows services using the Nuitka Commercial plugin. Defaults to inactive, \n" +
            "for example, using '{PROGRAM_BASE}.out.txt', which is a file near the program directory, see the user manual for the full list of available values.",
    },
    force_stderr_spec: {
        name: "Force Standard Error Specification",
        desc: "Force the program's standard error to this location. Useful for programs that disable the console and for Windows services using the Nuitka Commercial plugin. Defaults to inactive, \n" +
            "for example, using '{PROGRAM_BASE}.err.txt', which is a file near the program directory, see the user manual for the full list of available values.",
    },
    // Windows specific controls
    windows_console_mode: {
        name: "Windows Console Mode",
        desc: "Select the console mode to use, default mode is force",
        elements: {
            force: {
                name: "Force Mode",
                desc: "This will create one if there is no console window available, i.e., the program is started from a console window.",
            },
            disable: {
                name: "Disable Mode",
                desc: "No console will be created or used.",
            },
            attach: {
                name: "Attach Mode",
                desc: "Use the existing console for output",
            },
        },
    },
    windows_icon_from_ico: {
        name: "Windows Icon (ICO File)",
        desc: "Add an icon for the executable. Can be given multiple times for different resolutions or files containing multiple icons. When selecting a file containing multiple icons, \n" +
            "you can also use the #<n> suffix to specify a particular icon to include and ignore all others, where n is an integer index starting from 1",
    },
    windows_icon_from_exe: {
        name: "Windows Icon (EXE File)",
        desc: "Copy the icon from this executable (Windows only).",
    },
    onefile_windows_splash_screen_image: {
        name: "Onefile Windows Splash Screen Image",
        desc: "When compiling as a onefile for Windows, show this image while loading the application. Defaults to off.",
    },
    windows_uac_admin: {
        name: "Request Windows User Control (UAC) Admin Privileges",
        desc: "Request admin privileges via Windows User Control (UAC) when executing. (Windows only). Defaults to off.",
    },
    windows_uac_uiaccess: {
        name: "Request Windows User Control (UAC) UI Access Privileges",
        desc: "Request Windows User Control privileges (UAC) for running in specific folders and remote desktop access. (Windows only). Defaults to off.",
    },
    // macOS specific controls
    macos_create_app_bundle: {
        name: "Create macOS Application Bundle",
        desc: "When compiling for macOS, create a bundle instead of a plain binary application. This is the only way to disable the console, get high DPI graphics, and enable standalone mode. Defaults to off.",
    },
    macos_target_arch: {
        name: "macOS Target Architecture",
        desc: "What architecture this program should run on. The default value and limitations are what the running Python allows. The default is \"native\", which is the architecture Python runs on.",
        elements: {
            native: {
                name: "Native Architecture",
                desc: "Default value, which is the architecture Python runs on",
            },
        },
    },
    macos_app_icon: {
        name: "macOS Application Icon Path",
        desc: "Add an icon for the application bundle. Can only be given once. Defaults to the Python icon if available.",
        elements: {
            python_icon: {
                name: "Python Icon",
                desc: "Python icon, if available, this option is the default",
            },
        },
    },
    macos_signed_app_name: {
        name: "macOS Signed App Name",
        desc: "The application name to use for macOS signing. For best results, follow the naming format \"com.YourCompany.AppName\" \n" +
            "as these names must be globally unique and may grant access to protected APIs.",
    },
    macos_app_name: {
        name: "macOS Application Name",
        desc: "The product name to use in the macOS bundle information. Defaults to the base filename of the binary.",
    },
    macos_app_mode: {
        name: "macOS Application Mode",
        desc: "The application mode for the application bundle.",
        elements: {
            gui: {
                name: "GUI Mode",
                desc: "The default \"gui\" is a good choice when you launch a window and want it to appear in the Dock.",
            },
            background: {
                name: "Background Mode",
                desc: "An application that has no window will be a \"background\" application.",
            },
            ui_element: {
                name: "UI Element Mode",
                desc: "For UI elements that appear later, \"ui-element\" is in between. \n" +
                    "The application will not appear in the Dock, but when it later opens a window, it will get full access to the desktop.",
            },
        },
    },
    macos_sign_identity: {
        name: "macOS Sign Identity",
        desc: "When signing on macOS, by default a temporary identity is used, but with this option, you can specify another identity to use. \n" +
            "Code signing on macOS is now mandatory and cannot be disabled. Use \"auto\" to detect your unique installed identity. \n" +
            "If not given, defaults to \"ad-hoc\".",
        elements: {
            auto: {
                name: "Auto",
                desc: "Detect your unique installed identity",
            },
            ad_hoc: {
                name: "Ad-Hoc",
                desc: "Ad-hoc signing, default value",
            },
        },
    },
    macos_sign_notarization: {
        name: "macOS Sign Notarization",
        desc: "When signing for notarization, use the correct TeamID identity from Apple, with the required runtime signing options so it can be accepted.",
    },
    macos_app_version: {
        name: "macOS Application Version",
        desc: "The product version to use in the macOS bundle information. If not given, defaults to \"1.0\".",
        elements: {
            default_version: {
                name: "1.0",
                desc: "Default value",
            },
        },
    },
    macos_app_protected_resource: {
        name: "Request macOS Protected Resource",
        desc: "Request access to macOS protected resources, e.g., \"NSMicrophoneUsageDescription:Microphone access for recording audio.\" to request microphone access, \n" +
            "and provide an informative text for the user explaining why this is needed. Before the colon is an OS identifier for an access right, then the informative text. \n" +
            "Legal values can be found at https://developer.apple.com/documentation/bundleresources/information_property_list/protected_resources, \n" +
            "this option can be specified multiple times. Defaults to empty.",
    },
    // Linux specific controls
    linux_icon: {
        name: "Linux Icon",
        desc: "Add an icon for the single file binary executable. Can only be given once. Defaults to the Python icon if available.",
    },
    // Binary Version Information
    company_name: {
        name: "Company Name",
        desc: "The company name to use in the version information. Defaults to none.",
    },
    product_name: {
        name: "Product Name",
        desc: "The product name to use in the version information. Defaults to the base filename of the binary.",
    },
    file_version: {
        name: "File Version",
        desc: "The file version to use in the version information. Must be a sequence of up to 4 numbers, e.g., 1.0 or 1.0.0.0, no more numbers or strings are allowed. Defaults to none.",
    },
    product_version: {
        name: "Product Version",
        desc: "The product version to use in the version information. Must be a sequence of up to 4 numbers, e.g., 1.0 or 1.0.0.0, no more numbers or strings are allowed. Defaults to none.",
    },
    file_description: {
        name: "File Description",
        desc: "The file description to use in the version information. Currently only available on Windows. Defaults to the filename of the binary.",
    },
    copyright: {
        name: "Copyright Text",
        desc: "The copyright information to use in the version information. Currently available on Windows/macOS. Defaults to not display.",
    },
    trademarks: {
        name: "Trademarks Text",
        desc: "The trademarks to use in the version information. Currently available on Windows/macOS. Defaults to not display.",
    },
    // Plugin control
    enable_plugins: {
        name: "Enable Plugins",
        desc: "Enable plugins. Must be plugin names. Defaults to empty",
        elements: {
            anti_bloat: {
                name: "Anti-Bloat",
                desc: "Remove silly import patches from widely used library module sources.",
            },
            data_files: {
                name: "Include Data Files",
                desc: "Include data files specified by package configuration files.",
            },
            delvewheel: {
                name: "Delvewheel Support",
                desc: "Support packages using delvewheel in standalone mode",
            },
            dill_compat: {
                name: "Dill Package Compatibility Support",
                desc: "Support compatibility with the 'dill' package",
            },
            dll_files: {
                name: "Include DLL Files",
                desc: "Include DLL configuration files according to package configuration files",
            },
            enum_compat: {
                name: "Enum Compatibility",
                desc: "Support Python2 and the enum package",
            },
            eventlet: {
                name: "Eventlet Support",
                desc: "Support including 'eventlet' dependencies and its monkey patches for the 'dns' package.",
            },
            gevent: {
                name: "Gevent Support",
                desc: "Support the gevent package",
            },
            gi: {
                name: "GI Support",
                desc: "Support typelib dependencies for the GI package",
            },
            glfw: {
                name: "GLFW Support",
                desc: "Support using 'OpenGL' (PyOpenGL) and 'glfw' packages in standalone mode",
            },
            implicit_imports: {
                name: "Implicit Imports",
                desc: "Provide implicit imports according to package configuration files.",
            },
            kivy: {
                name: "Kivy Support",
                desc: "Support the 'kivy' package.",
            },
            matplotlib: {
                name: "Matplotlib Support",
                desc: "Support the 'matplotlib' module.",
            },
            multiprocessing: {
                name: "Multiprocessing Support",
                desc: "Support Python's 'multiprocessing' module.",
            },
            no_qt: {
                name: "Disable Qt",
                desc: "Disable all Qt bindings in standalone mode.",
            },
            options_nanny: {
                name: "Options Nanny",
                desc: "Notify users of potential issues according to package configuration files.",
            },
            pbr_compat: {
                name: "PBR Compatibility Support",
                desc: "Support using the 'pbr' package in standalone mode.",
            },
            pkg_resources: {
                name: "Pkg Resources Support",
                desc: "Resolve methods for pkg resources",
            },
            pmw_freezer: {
                name: "Pmw Support",
                desc: "Support the 'Pmw' package",
            },
            pylint_warnings: {
                name: "Pylint Warnings",
                desc: "Support PyLint / PyDev code marking.",
            },
            pyqt5: {
                name: "PyQt5 Support",
                desc: "Support the 'PyQt5' package.",
            },
            pyqt6: {
                name: "PyQt6 Support",
                desc: "Support the 'PyQt6' package",
            },
            pyside2: {
                name: "PySide2 Support",
                desc: "Support the 'PySide2' package",
            },
            pyside6: {
                name: "PySide6 Support",
                desc: "Support the 'PySide6' package",
            },
            pywebview: {
                name: "PyWebview Support",
                desc: "Support the 'webview' package (pywebview on PyPI).",
            },
            tk_inter: {
                name: "Tkinter Support",
                desc: "Support Python's Tk module.",
            },
            transformers: {
                name: "Transformers Implicit Imports",
                desc: "Provide implicit imports for the transformers package.",
            },
            upx: {
                name: "Auto Use UPX",
                desc: "Automatically use UPX to compress the created binary files.",
            },
        },
    },
    disable_plugins: {
        name: "Disable Plugins",
        desc: "Disable plugins. Must be plugin names. Use '--plugin-list' to query the full list and exit. Most of the time, disabling standard plugins is not a good idea. Defaults to empty.",
        elements: {
            anti_bloat: {
                name: "Anti-Bloat",
                desc: "Remove silly import patches from widely used library module sources.",
            },
            data_files: {
                name: "Include Data Files",
                desc: "Include data files specified by package configuration files.",
            },
            delvewheel: {
                name: "Delvewheel Support",
                desc: "Support packages using delvewheel in standalone mode",
            },
            dill_compat: {
                name: "Dill Package Compatibility Support",
                desc: "Support compatibility with the 'dill' package",
            },
            dll_files: {
                name: "Include DLL Files",
                desc: "Include DLL configuration files according to package configuration files",
            },
            enum_compat: {
                name: "Enum Compatibility",
                desc: "Support Python2 and the enum package",
            },
            eventlet: {
                name: "Eventlet Support",
                desc: "Support including 'eventlet' dependencies and its monkey patches for the 'dns' package.",
            },
            gevent: {
                name: "Gevent Support",
                desc: "Support the gevent package",
            },
            gi: {
                name: "GI Support",
                desc: "Support typelib dependencies for the GI package",
            },
            glfw: {
                name: "GLFW Support",
                desc: "Support using 'OpenGL' (PyOpenGL) and 'glfw' packages in standalone mode",
            },
            implicit_imports: {
                name: "Implicit Imports",
                desc: "Provide implicit imports according to package configuration files.",
            },
            kivy: {
                name: "Kivy Support",
                desc: "Support the 'kivy' package.",
            },
            matplotlib: {
                name: "Matplotlib Support",
                desc: "Support the 'matplotlib' module.",
            },
            multiprocessing: {
                name: "Multiprocessing Support",
                desc: "Support Python's 'multiprocessing' module.",
            },
            no_qt: {
                name: "Disable Qt",
                desc: "Disable all Qt bindings in standalone mode.",
            },
            options_nanny: {
                name: "Options Nanny",
                desc: "Notify users of potential issues according to package configuration files.",
            },
            pbr_compat: {
                name: "PBR Compatibility Support",
                desc: "Support using the 'pbr' package in standalone mode.",
            },
            pkg_resources: {
                name: "Pkg Resources Support",
                desc: "Resolve methods for pkg resources",
            },
            pmw_freezer: {
                name: "Pmw Support",
                desc: "Support the 'Pmw' package",
            },
            pylint_warnings: {
                name: "Pylint Warnings",
                desc: "Support PyLint / PyDev code marking.",
            },
            pyqt5: {
                name: "PyQt5 Support",
                desc: "Support the 'PyQt5' package.",
            },
            pyqt6: {
                name: "PyQt6 Support",
                desc: "Support the 'PyQt6' package",
            },
            pyside2: {
                name: "PySide2 Support",
                desc: "Support the 'PySide2' package",
            },
            pyside6: {
                name: "PySide6 Support",
                desc: "Support the 'PySide6' package",
            },
            pywebview: {
                name: "PyWebview Support",
                desc: "Support the 'webview' package (pywebview on PyPI).",
            },
            tk_inter: {
                name: "Tkinter Support",
                desc: "Support Python's Tk module.",
            },
            transformers: {
                name: "Transformers Implicit Imports",
                desc: "Provide implicit imports for the transformers package.",
            },
            upx: {
                name: "Auto Use UPX",
                desc: "Automatically use UPX to compress the created binary files.",
            },
        },
    },
    plugin_list: {
        name: "Plugin List",
        desc: "Show the list of all available plugins and exit. Defaults to off.",
    },
    user_plugin: {
        name: "User Plugin",
        desc: "Filename of user plugins. Can be given multiple times. Defaults to empty.",
    },
    module_parameter: {
        name: "Module Parameter",
        desc: "Provide a module parameter. Some packages require you to provide extra decisions. The current format is --module-parameter=module.name-option-name=value \n" +
            "(module parameter=module.name-option-name=value). Defaults to empty.",
    },
    show_source_changes: {
        name: "Show Source Changes",
        desc: "Show source changes to original Python file contents before compilation. Mainly used for developing plugins and configuring Nuitka packages. For example, using '-show-source-changes=numpy.**' \n" +
            "can show all changes under a given namespace, or using '*' to show all possible but large changes. Defaults to empty",
    },
    // Cross compilation
    target: {
        name: "Target",
        desc: "Cross-compilation target. This feature is highly experimental and under development, currently not available. We are developing the target '--target=wasi', other targets are not supported yet.",
    },
    // Plugin options of 'anti-bloat'
    show_anti_bloat_changes: {
        name: "Show Anti-Bloat Changes",
        desc: "Annotate changes made by the plugin.",
    },
    noinclude_setuptools_mode: {
        name: "Noinclude Setuptools Mode",
        desc: "What to do when encountering \"setuptools\" or \"setuptools_scm\" imports. This package can get very large with many dependencies and should be avoided.",
    },
    noinclude_pytest_mode: {
        name: "Noinclude Pytest Mode",
        desc: "What to do when encountering \"pytest\" or \"nose\" imports. This package can get very large with many dependencies and should be avoided.",
    },
    noinclude_unittest_mode: {
        name: "Noinclude Unittest Mode",
        desc: "What to do when encountering \"unittest\" imports. This package can get very large with many dependencies and should be avoided.",
    },
    noinclude_pydoc_mode: {
        name: "Noinclude Pydoc Mode",
        desc: "What to do when encountering \"pydoc\" imports. The use of this package marks code that is useless in deployment and should be avoided.",
    },
    noinclude_IPython_mode: {
        name: "Noinclude IPython Mode",
        desc: "What to do when encountering \"IPython\" imports. This package can get very large with many dependencies and should be avoided.",
    },
    noinclude_dask_mode: {
        name: "Noinclude Dask Mode",
        desc: "What to do when encountering \"dask\" imports. This package can get very large with many dependencies and should be avoided.",
    },
    noinclude_numba_mode: {
        name: "Noinclude Numba Mode",
        desc: "What to do when encountering \"numba\" imports. This package can get very large with many dependencies and currently does not work properly in standalone mode. \n" +
            "This package can get very large with many dependencies and should be avoided.",
    },
    noinclude_default_mode: {
        name: "Noinclude Default Mode",
        desc: "This actually provides the default \"warning\" value for the above options and can be used to turn on all of the above.",
    },
    noinclude_custom_mode: {
        name: "Noinclude Custom Mode",
        desc: "What to do when encountering specific imports. The format is module name, which should and can be a top-level package, followed by an option, \"error\", \"warning\", \"nofollow\", \n" +
            "e.g., PyQt5:error.",
    },
    // Plugin options of 'spacy'
    spacy_language_model: {
        name: "SpaCy Language Model",
        desc: "Spacy language model to use. Can be specified multiple times. Use 'all' to include all downloaded models.",
        elements: {
            all: {
                name: "Include All",
                desc: "Include all downloaded models",
            },
        },
    },
};